import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Svg, { Circle, Defs, G, LinearGradient, Path, Stop, Text as SvgText } from 'react-native-svg';
import { colors } from '../constants/colors';
import { getLetterStrokes } from '../constants/letterStrokes';
import { Letter, StrokePoint } from '../types/language';

interface TracingCanvasProps {
    letter: Letter;
    onComplete: () => void;
}

const CANVAS_SIZE = Dimensions.get('window').width - 60;
const SVG_WIDTH = 300;
const SVG_HEIGHT = 350;

export const TracingCanvas = ({ letter, onComplete }: TracingCanvasProps) => {
    const [currentStrokeIndex, setCurrentStrokeIndex] = useState(0);
    const [userPaths, setUserPaths] = useState<string[]>([]);
    const [currentPath, setCurrentPath] = useState('');
    const pathStarted = useRef(false);

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

    // Convert SVG path points to Path d string
    const pointsToPath = (points: StrokePoint[]): string => {
        if (points.length === 0) return '';
        const path = points.map((point, index) => {
            return index === 0 ? `M ${point.x} ${point.y}` : `L ${point.x} ${point.y}`;
        });
        return path.join(' ');
    };

    // Calculate distance between two points
    const distance = (p1: StrokePoint, p2: StrokePoint): number => {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    };

    // Check if user is near the stroke start point
    const isNearStartPoint = (touchPoint: StrokePoint, startPoint: StrokePoint): boolean => {
        return distance(touchPoint, startPoint) < 40; // 40 unit tolerance
    };

    // Check if stroke is complete
    const isStrokeComplete = (path: string): boolean => {
        // Simple validation: check if path has sufficient length
        return path.length > 50;
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
            }
        })
        .onUpdate((event) => {
            if (!pathStarted.current) return;

            const { x, y } = event;
            const scale = SVG_WIDTH / CANVAS_SIZE;
            const svgX = x * scale;
            const svgY = y * scale;

            setCurrentPath((prev) => `${prev} L ${svgX} ${svgY}`);
        })
        .onEnd(() => {
            if (!pathStarted.current) return;

            // Validate the stroke
            if (isStrokeComplete(currentPath)) {
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
                // Stroke invalid, reset
                setCurrentPath('');
                pathStarted.current = false;
            }
        });

    return (
        <View style={styles.container}>
            <View style={styles.canvasWrapper}>
                <GestureDetector gesture={pan}>
                    <View style={styles.canvas}>
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
                                        <Circle
                                            cx={stroke.startPoint.x}
                                            cy={stroke.startPoint.y}
                                            r={isActive ? 18 : 14}
                                            fill={isActive ? colors.orange : isCompleted ? colors.strokeComplete : '#999'}
                                        />

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
                    </View>
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
