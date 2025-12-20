import React, { useRef, useState } from 'react';
import { Dimensions, PanResponder, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';
import Svg, { Path, Image as SvgImage } from 'react-native-svg';
import { colors } from '../constants/colors';
import { Letter, StrokePoint } from '../types/language';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CANVAS_SIZE = SCREEN_WIDTH * 0.85;
const SVG_WIDTH = 300;
const SVG_HEIGHT = 300;
const BOUNDARY_THRESHOLD = 120; // Increased for smoother tracing experience
const COMPLETION_THRESHOLD = 0.95; // Need 95% coverage to complete (strict)

interface LetterCanvasProps {
    letter: Letter;
    onComplete: () => void;
}

export const LetterCanvas: React.FC<LetterCanvasProps> = ({ letter, onComplete }) => {
    const [paths, setPaths] = useState<string[]>([]);
    const currentPath = useRef('');
    const shakeOffset = useSharedValue(0);
    const [coveredPoints, setCoveredPoints] = useState<Set<number>>(new Set());
    const [isComplete, setIsComplete] = useState(false);
    const isDrawing = useRef(false); // Track if currently drawing

    // Get all stroke points for validation
    const getAllStrokePoints = (): StrokePoint[] => {
        const allPoints: StrokePoint[] = [];
        letter.strokes.forEach(stroke => {
            allPoints.push(...stroke.points);
        });
        return allPoints;
    };

    const allValidPoints = getAllStrokePoints();

    // Calculate distance between two points
    const distance = (p1: { x: number; y: number }, p2: { x: number; y: number }): number => {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    };

    // Calculate distance from point to line segment
    const distanceToSegment = (p: { x: number; y: number }, a: StrokePoint, b: StrokePoint): number => {
        const l2 = Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2);
        if (l2 === 0) return distance(p, a);
        let t = ((p.x - a.x) * (b.x - a.x) + (p.y - a.y) * (b.y - a.y)) / l2;
        t = Math.max(0, Math.min(1, t));
        return distance(p, { x: a.x + t * (b.x - a.x), y: a.y + t * (b.y - a.y) });
    };

    // Check if point is within letter boundaries
    const isPointValid = (x: number, y: number): boolean => {
        // Convert screen coordinates to SVG coordinates
        const svgX = (x / CANVAS_SIZE) * SVG_WIDTH;
        const svgY = (y / CANVAS_SIZE) * SVG_HEIGHT;
        const point = { x: svgX, y: svgY };

        // Check if near any stroke segment
        for (let i = 0; i < allValidPoints.length - 1; i++) {
            if (distanceToSegment(point, allValidPoints[i], allValidPoints[i + 1]) < BOUNDARY_THRESHOLD) {
                return true;
            }
        }
        return false;
    };

    const handleMistake = () => {
        // Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        shakeOffset.value = withSequence(
            withTiming(-10, { duration: 50 }),
            withTiming(10, { duration: 50 }),
            withTiming(-10, { duration: 50 }),
            withTiming(10, { duration: 50 }),
            withTiming(0, { duration: 50 })
        );
    };

    // Mark nearby points as covered
    const markPointsCovered = (x: number, y: number) => {
        const svgX = (x / CANVAS_SIZE) * SVG_WIDTH;
        const svgY = (y / CANVAS_SIZE) * SVG_HEIGHT;
        const point = { x: svgX, y: svgY };

        const newCovered = new Set(coveredPoints);
        let anyAdded = false;

        // Mark all points within threshold as covered
        allValidPoints.forEach((validPoint, index) => {
            if (distance(point, validPoint) < BOUNDARY_THRESHOLD) {
                if (!newCovered.has(index)) {
                    newCovered.add(index);
                    anyAdded = true;
                }
            }
        });

        if (anyAdded) {
            setCoveredPoints(newCovered);

            // Check completion (disabled for now)
            const coverage = newCovered.size / allValidPoints.length;
            if (coverage >= COMPLETION_THRESHOLD && !isComplete) {
                setIsComplete(true);
                // Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                // Celebration disabled for now
                // setTimeout(() => {
                //     onComplete();
                // }, 500);
            }
        }
    };

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: (e) => {
            const { locationX, locationY } = e.nativeEvent;

            // Validate starting point
            if (!isPointValid(locationX, locationY)) {
                // handleMistake();
                // isDrawing.current = false;
                // return;
            }

            isDrawing.current = true;
            currentPath.current = `M${locationX},${locationY}`;
            setPaths(p => [...p, currentPath.current]);
            // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        },
        onPanResponderMove: (e) => {
            // Don't continue if not drawing
            if (!isDrawing.current) return;

            const { locationX, locationY } = e.nativeEvent;

            // Validate each point during movement
            if (!isPointValid(locationX, locationY)) {
                // Just ignore invalid points - don't stop drawing, don't shake
                return;
            }

            // Only mark points as covered if they are valid
            markPointsCovered(locationX, locationY);

            currentPath.current += ` L${locationX},${locationY}`;
            setPaths(p => {
                const copy = [...p];
                if (copy.length > 0) {
                    copy[copy.length - 1] = currentPath.current;
                }
                return copy;
            });
        },
        onPanResponderRelease: () => {
            isDrawing.current = false;
            // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
    });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: shakeOffset.value }],
    }));

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.canvasWrapper, animatedStyle]}>
                <View style={styles.canvas} {...panResponder.panHandlers}>
                    <Svg width={CANVAS_SIZE} height={CANVAS_SIZE}>
                        {/* Layer 1: Solid letter outline (base) */}
                        {letter.solidImage && (
                            <SvgImage
                                href={letter.solidImage}
                                width="100%"
                                height="100%"
                                preserveAspectRatio="xMidYMid meet"
                            />
                        )}

                        {/* Layer 2: Hint overlay (dotted guide) */}
                        {letter.hintImage && (
                            <SvgImage
                                href={letter.hintImage}
                                width="100%"
                                height="100%"
                                preserveAspectRatio="xMidYMid meet"
                                opacity={0.6}
                            />
                        )}

                        {/* Layer 3: User drawing paths */}
                        {paths.map((d, i) => (
                            <Path
                                key={i}
                                d={d}
                                stroke={colors.orange}
                                strokeWidth={20}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        ))}
                    </Svg>
                </View>
            </Animated.View>

            {/* Bottom Info */}
            <View style={styles.bottomInfoContainer}>
                <View style={styles.helperCard}>
                    <View style={styles.helperImage}>
                        <Text style={styles.emoji}>{letter.image}</Text>
                    </View>
                    <View style={styles.helperBadge}>
                        <Text style={styles.helperText}>
                            {letter.character} is for {letter.word}
                        </Text>
                    </View>
                </View>

                <View style={styles.hintContainer}>
                    <Text style={styles.hintIcon}>🎨</Text>
                    <Text style={styles.hintText}>Color It!</Text>
                </View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
    },
    canvasWrapper: {
        position: 'relative',
        zIndex: 1,
    },
    canvas: {
        width: CANVAS_SIZE,
        height: CANVAS_SIZE,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 8,
        borderWidth: 4,
        borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    bottomInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 20,
        gap: 20,
    },
    helperCard: {
        alignItems: 'center',
        transform: [{ rotate: '-3deg' }],
    },
    helperImage: {
        width: 80,
        height: 80,
        borderRadius: 18,
        backgroundColor: 'rgba(255, 245, 230, 0.95)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: colors.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
    },
    emoji: {
        fontSize: 42,
    },
    helperBadge: {
        marginTop: -10,
        backgroundColor: colors.orange,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
        zIndex: 2,
    },
    helperText: {
        color: colors.white,
        fontSize: 10,
        fontWeight: '700',
    },
    hintContainer: {
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        padding: 12,
        borderRadius: 20,
        minWidth: 100,
    },
    hintIcon: {
        fontSize: 24,
        marginBottom: 4,
    },
    hintText: {
        fontSize: 12,
        fontWeight: '700',
        color: colors.orange,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});
