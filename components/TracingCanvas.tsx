import * as Haptics from 'expo-haptics';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedProps, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import Svg, { Circle, Defs, G, LinearGradient, Path, Stop, Text as SvgText } from 'react-native-svg';
import { colors } from '../constants/colors';
import { getLetterStrokes } from '../constants/letterStrokes';
import { Letter, StrokePoint } from '../types/language';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface TracingCanvasProps {
    letter: Letter;
    onComplete: () => void;
}

const CANVAS_SIZE = Dimensions.get('window').width - 60;
const SVG_WIDTH = 300;
const SVG_HEIGHT = 350;



export const TracingCanvas = ({ letter, onComplete }: TracingCanvasProps) => {
    // ... existing state ...
    const [currentStrokeIndex, setCurrentStrokeIndex] = useState(0);
    const [userPaths, setUserPaths] = useState<string[]>([]);
    const [currentPath, setCurrentPath] = useState('');
    const pathStarted = useRef(false);



    // Animation values
    const shakeOffset = useSharedValue(0);
    const pulse = useSharedValue(1);

    // Start pulse animation
    useEffect(() => {
        pulse.value = withRepeat(withTiming(1.2, { duration: 800 }), -1, true);
    }, []);

    const animatedCircleProps = useAnimatedProps(() => ({
        r: 18 * pulse.value,
    }));

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: shakeOffset.value }],
        };
    });

    // ... existing functions (reset, stroke logic) ...

    // Reset state when letter changes
    useEffect(() => {
        setCurrentStrokeIndex(0);
        setUserPaths([]);
        setCurrentPath('');
        pathStarted.current = false;
    }, [letter]);



    // Get stroke data for this letter
    const strokes = getLetterStrokes(letter.uppercase || letter.character);

    // If no strokes defined, show a simple message
    if (!strokes || strokes.length === 0) {
        return (
            <View style={styles.container}>
                <View style={styles.canvas}>
                    <Text style={{ fontSize: 24, textAlign: 'center', padding: 20 }}>
                        Stroke data not available for this letter yet.{'\n'}
                        Coming soon!
                    </Text>
                </View>
            </View>
        );
    }

    // Convert SVG path points to Path d string with smoothing
    const pointsToPath = (points: StrokePoint[]): string => {
        if (points.length === 0) return '';
        if (points.length < 3) {
            return points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ');
        }

        const p = points;
        let d = `M ${p[0].x} ${p[0].y}`;

        for (let i = 1; i < p.length - 1; i++) {
            const midX = (p[i].x + p[i + 1].x) / 2;
            const midY = (p[i].y + p[i + 1].y) / 2;
            // Q controlPoint endPoint
            d += ` Q ${p[i].x} ${p[i].y} ${midX} ${midY}`;
        }

        // Line to the last point
        d += ` L ${p[p.length - 1].x} ${p[p.length - 1].y}`;
        return d;
    };

    // Calculate distance between two points
    const distance = (p1: StrokePoint, p2: StrokePoint): number => {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    };

    // Calculate distance from point P to line segment AB
    const distanceToSegment = (p: StrokePoint, a: StrokePoint, b: StrokePoint): number => {
        const l2 = Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2);
        if (l2 === 0) return distance(p, a);
        let t = ((p.x - a.x) * (b.x - a.x) + (p.y - a.y) * (b.y - a.y)) / l2;
        t = Math.max(0, Math.min(1, t));
        return distance(p, { x: a.x + t * (b.x - a.x), y: a.y + t * (b.y - a.y) });
    };

    // Check if point is close enough to any segment of the stroke
    const isPointNearStroke = (point: StrokePoint, strokePoints: StrokePoint[], threshold = 60): boolean => {
        // If stroke has only 1 point?
        if (strokePoints.length < 2) return distance(point, strokePoints[0]) < threshold;

        for (let i = 0; i < strokePoints.length - 1; i++) {
            if (distanceToSegment(point, strokePoints[i], strokePoints[i + 1]) < threshold) {
                return true;
            }
        }
        return false;
    };

    // Check if user is near the stroke start point
    const isNearStartPoint = (touchPoint: StrokePoint, startPoint: StrokePoint): boolean => {
        return distance(touchPoint, startPoint) < 40; // 40 unit tolerance
    };

    // Check if stroke is complete
    // Check if stroke is complete
    const isStrokeComplete = (path: string, lastPoint: StrokePoint, targetEnd: StrokePoint): boolean => {
        // Must be close to the end point
        return distance(lastPoint, targetEnd) < 50;
    };



    const handleMistake = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        shakeOffset.value = withSequence(
            withTiming(-10, { duration: 50 }),
            withTiming(10, { duration: 50 }),
            withTiming(-10, { duration: 50 }),
            withTiming(10, { duration: 50 }),
            withTiming(0, { duration: 50 })
        );
        setCurrentPath('');
        pathStarted.current = false;
    };

    const pan = Gesture.Pan()
        .runOnJS(true)
        .onStart((event) => {
            const { x, y } = event;
            const scale = SVG_WIDTH / CANVAS_SIZE;
            const svgX = x * scale;
            const svgY = y * scale;

            if (currentStrokeIndex >= strokes.length) return;

            const currentStroke = strokes[currentStrokeIndex];

            // Check if starting near the correct point
            if (isNearStartPoint({ x: svgX, y: svgY }, currentStroke.startPoint)) {
                pathStarted.current = true;
                setCurrentPath(`M ${svgX} ${svgY}`);
            } else {
                // Initial touch validation? Optional. 
                // If they touch completely elsewhere, maybe shake?
                // For now, only shake if they start drawing and deviate.
                // Actually user request: "Trace outside path... detected as incorrect"
            }
        })
        .onUpdate((event) => {
            if (!pathStarted.current) return;

            const { x, y } = event;
            const scale = SVG_WIDTH / CANVAS_SIZE;
            const svgX = x * scale;
            const svgY = y * scale;

            const currentStroke = strokes[currentStrokeIndex];

            // Validate scribble
            if (!isPointNearStroke({ x: svgX, y: svgY }, currentStroke.points)) {
                handleMistake();
                return;
            }

            setCurrentPath((prev) => `${prev} L ${svgX} ${svgY}`);
        })
        .onEnd((event) => {
            if (!pathStarted.current) return;

            const scale = SVG_WIDTH / CANVAS_SIZE;
            const svgX = event.x * scale;
            const svgY = event.y * scale;
            const currentStroke = strokes[currentStrokeIndex];
            const endPoint = currentStroke.points[currentStroke.points.length - 1];

            // Validate if completed
            if (isStrokeComplete(currentPath, { x: svgX, y: svgY }, endPoint)) {
                // Stroke completed successfully
                setUserPaths([...userPaths, currentPath]);
                setCurrentPath('');
                pathStarted.current = false;

                // Move to next stroke or complete letter
                if (currentStrokeIndex < strokes.length - 1) {
                    setCurrentStrokeIndex(currentStrokeIndex + 1);
                } else {
                    // Letter complete!
                    onComplete();
                }
            } else {
                // Stroke invalid (incomplete), reset
                handleMistake();
            }
        });

    return (
        <View style={styles.container}>
            <View style={styles.canvasWrapper}>
                <GestureDetector gesture={pan}>
                    <Animated.View style={[styles.canvas, animatedStyle]}>
                        <Svg width={CANVAS_SIZE} height={(CANVAS_SIZE * SVG_HEIGHT) / SVG_WIDTH} viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}>
                            <Defs>
                                <LinearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <Stop offset="0%" stopColor={colors.orange} stopOpacity="0.8" />
                                    <Stop offset="100%" stopColor={colors.darkOrange} stopOpacity="1" />
                                </LinearGradient>
                            </Defs>

                            {/* Render all strokes */}
                            {strokes.map((stroke, index) => {
                                const isActive = index === currentStrokeIndex;
                                const isCompleted = index < currentStrokeIndex;
                                const opacity = isCompleted ? 0.3 : isActive ? 1 : 0.5;

                                return (
                                    <G key={stroke.id} opacity={opacity}>
                                        {/* Background guide line */}
                                        <Path
                                            d={pointsToPath(stroke.points)}
                                            stroke={isCompleted ? colors.strokeComplete : '#d0d0d0'}
                                            strokeWidth={24}
                                            strokeLinecap="round"
                                            fill="none"
                                        />

                                        {/* Dashed center line */}
                                        <Path
                                            d={pointsToPath(stroke.points)}
                                            stroke={isActive ? colors.orange : '#999'}
                                            strokeWidth={4}
                                            strokeLinecap="round"
                                            strokeDasharray="12,12"
                                            fill="none"
                                        />

                                        {/* Start point indicator */}
                                        {isActive ? (
                                            <AnimatedCircle
                                                cx={stroke.startPoint.x}
                                                cy={stroke.startPoint.y}
                                                fill={colors.orange}
                                                animatedProps={animatedCircleProps}
                                            />
                                        ) : (
                                            <Circle
                                                cx={stroke.startPoint.x}
                                                cy={stroke.startPoint.y}
                                                r={isCompleted ? 0 : 14} // Hide start point if completed? Or keep generic. User HTML shows active one large.
                                                fill={isCompleted ? colors.strokeComplete : '#999'}
                                                opacity={isCompleted ? 0 : 1} // Hide passed start points to clean up UI
                                            />
                                        )}

                                        {/* Stroke number */}
                                        <SvgText
                                            x={stroke.startPoint.x}
                                            y={stroke.startPoint.y + 6}
                                            fontSize={isActive ? 16 : 14}
                                            fontWeight="bold"
                                            fill="white"
                                            textAnchor="middle"
                                        >
                                            {stroke.id}
                                        </SvgText>

                                    </G>
                                );
                            })}

                            {/* Completed user strokes */}
                            {userPaths.map((path, index) => (
                                <Path
                                    key={`completed-${index}`}
                                    d={path}
                                    stroke="url(#strokeGradient)"
                                    strokeWidth={18}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    opacity={0.9}
                                />
                            ))}

                            {/* Current drawing path */}
                            {currentPath && (
                                <Path
                                    d={currentPath}
                                    stroke={colors.orange}
                                    strokeWidth={18}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                />
                            )}
                        </Svg>
                    </Animated.View>
                </GestureDetector>
            </View>

            {/* Bottom Info Row: Helper Card + Instruction */}
            <View style={styles.bottomInfoContainer}>
                {/* Helper card with image */}
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

                {/* Instruction hint */}
                <View style={styles.hintContainer}>
                    <Text style={styles.hintIcon}>👆</Text>
                    <Text style={styles.hintText}>Start {currentStrokeIndex + 1}</Text>
                </View>
            </View>
        </View>
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
        aspectRatio: SVG_WIDTH / SVG_HEIGHT,
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
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
