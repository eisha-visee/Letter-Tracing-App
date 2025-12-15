import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Svg, { Circle, G, Path, Text as SvgText } from 'react-native-svg';
import { colors } from '../constants/colors';
import { Letter } from '../types/language';

interface TracingCanvasProps {
    letter: Letter;
    onComplete: () => void;
}

const CANVAS_SIZE = Dimensions.get('window').width - 80;

export const TracingCanvas = ({ letter, onComplete }: TracingCanvasProps) => {
    const [currentStroke, setCurrentStroke] = useState(0);
    const [userPath, setUserPath] = useState('');
    const [isDrawing, setIsDrawing] = useState(false);

    // Generate letter outline path (simplified for demo)
    const getLetterPath = () => {
        const char = letter.uppercase || letter.character;
        // This is a simplified representation
        // In production, use actual SVG paths for each letter
        return `M ${CANVAS_SIZE / 3} ${CANVAS_SIZE / 2} L ${(CANVAS_SIZE * 2) / 3} ${CANVAS_SIZE / 2}`;
    };

    const pan = Gesture.Pan()
        .onStart(() => {
            setIsDrawing(true);
            setUserPath('');
        })
        .onUpdate((event) => {
            const { x, y } = event;
            if (isDrawing) {
                setUserPath((prev) => {
                    if (prev === '') {
                        return `M ${x} ${y}`;
                    }
                    return `${prev} L ${x} ${y}`;
                });
            }
        })
        .onEnd(() => {
            setIsDrawing(false);
            // Simplified stroke validation
            if (userPath.length > 50) {
                if (currentStroke < letter.strokes.length - 1) {
                    setCurrentStroke(currentStroke + 1);
                    setUserPath('');
                } else {
                    // Letter complete!
                    setTimeout(() => {
                        onComplete();
                    }, 500);
                }
            }
        });

    return (
        <View style={styles.container}>
            <View style={styles.canvasWrapper}>
                <GestureDetector gesture={pan}>
                    <View style={styles.canvas}>
                        <Svg width={CANVAS_SIZE} height={CANVAS_SIZE}>
                            {/* Letter outline (dashed) */}
                            <G>
                                <SvgText
                                    x={CANVAS_SIZE / 2}
                                    y={CANVAS_SIZE / 2 + 60}
                                    fontSize="180"
                                    fontWeight="900"
                                    fill="none"
                                    stroke={colors.strokeGray}
                                    strokeWidth="8"
                                    strokeDasharray="15,10"
                                    textAnchor="middle"
                                    opacity={0.5}
                                >
                                    {letter.uppercase || letter.character}
                                </SvgText>
                            </G>

                            {/* Stroke start points */}
                            {letter.strokes.map((stroke, index) => (
                                <Circle
                                    key={`start-${index}`}
                                    cx={stroke.startPoint.x}
                                    cy={stroke.startPoint.y}
                                    r={12}
                                    fill={index === currentStroke ? colors.orange : colors.strokeGray}
                                    opacity={index <= currentStroke ? 1 : 0.3}
                                />
                            ))}

                            {/* Stroke numbers */}
                            {letter.strokes.map((stroke, index) => (
                                <SvgText
                                    key={`num-${index}`}
                                    x={stroke.startPoint.x}
                                    y={stroke.startPoint.y + 5}
                                    fontSize="14"
                                    fontWeight="bold"
                                    fill={colors.white}
                                    textAnchor="middle"
                                    opacity={index <= currentStroke ? 1 : 0.3}
                                >
                                    {index + 1}
                                </SvgText>
                            ))}

                            {/* User's drawn path */}
                            {userPath && (
                                <Path
                                    d={userPath}
                                    stroke={colors.strokeActive}
                                    strokeWidth="12"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            )}
                        </Svg>
                    </View>
                </GestureDetector>

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
            </View>

            <View style={styles.instruction}>
                <Text style={styles.instructionText}>Follow the numbers!</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    canvasWrapper: {
        position: 'relative',
    },
    canvas: {
        width: CANVAS_SIZE,
        height: CANVAS_SIZE,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    instruction: {
        marginTop: 20,
    },
    instructionText: {
        fontSize: 18,
        color: colors.mediumGray,
        fontWeight: '600',
    },
    helperCard: {
        position: 'absolute',
        bottom: -30,
        right: -10,
        alignItems: 'center',
    },
    helperImage: {
        width: 80,
        height: 80,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: colors.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },
    emoji: {
        fontSize: 40,
    },
    helperBadge: {
        marginTop: 8,
        backgroundColor: colors.orange,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    helperText: {
        color: colors.white,
        fontSize: 13,
        fontWeight: '700',
    },
});
