import * as Haptics from 'expo-haptics';
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../constants/colors';
import { Letter } from '../types/language';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CANVAS_SIZE = SCREEN_WIDTH * 0.85;

interface LetterCanvasProps {
    letter: Letter;
    onComplete: () => void;
}

export const LetterCanvas: React.FC<LetterCanvasProps> = ({ letter, onComplete }) => {
    const [paths, setPaths] = useState<string[]>([]);
    const [currentPath, setCurrentPath] = useState<string>('');

    const pan = Gesture.Pan()
        .onBegin((event) => {
            const newPath = `M ${event.x} ${event.y}`;
            setCurrentPath(newPath);
        })
        .onUpdate((event) => {
            if (currentPath) {
                setCurrentPath(currentPath + ` L ${event.x} ${event.y}`);
            }
        })
        .onEnd(() => {
            if (currentPath) {
                setPaths([...paths, currentPath]);
                setCurrentPath('');
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }
        });

    return (
        <View style={styles.container}>
            <View style={styles.canvasWrapper}>
                <GestureDetector gesture={pan}>
                    <View style={styles.canvas}>
                        {/* Layer 1: Solid letter outline (base image) */}
                        {letter.solidImage && (
                            <Image
                                source={letter.solidImage}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: CANVAS_SIZE,
                                    height: CANVAS_SIZE,
                                }}
                                resizeMode="contain"
                            />
                        )}

                        {/* Layer 2: Hint overlay (optional) */}
                        {letter.hintImage && (
                            <Image
                                source={letter.hintImage}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: CANVAS_SIZE,
                                    height: CANVAS_SIZE,
                                    opacity: 0.6,
                                }}
                                resizeMode="contain"
                            />
                        )}

                        {/* Layer 3: SVG for user drawing */}
                        <Svg
                            width={CANVAS_SIZE}
                            height={CANVAS_SIZE}
                            style={StyleSheet.absoluteFillObject}
                        >
                            {/* Completed user strokes */}
                            {paths.map((path, index) => (
                                <Path
                                    key={`path-${index}`}
                                    d={path}
                                    stroke={colors.orange}
                                    strokeWidth={20}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                />
                            ))}

                            {/* Current drawing stroke */}
                            {currentPath && (
                                <Path
                                    d={currentPath}
                                    stroke={colors.orange}
                                    strokeWidth={20}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                />
                            )}
                        </Svg>
                    </View>
                </GestureDetector>
            </View>

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
        height: CANVAS_SIZE,
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
