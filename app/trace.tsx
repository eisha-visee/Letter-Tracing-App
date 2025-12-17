import { LetterCanvas } from '@/components/LetterCanvas';
import { ProgressBar } from '@/components/ProgressBar';
import { TracingCanvas } from '@/components/TracingCanvas';
import { colors } from '@/constants/colors';
import { getLanguageById } from '@/constants/languageData';
import { useApp } from '@/contexts/AppContext';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TraceScreen() {
    const router = useRouter();
    const [resetKey, setResetKey] = useState(0);
    const confettiRef = React.useRef<ConfettiCannon>(null);
    const {
        selectedLanguage,
        currentLetterIndex,
        setCurrentLetterIndex,
        markLetterComplete,
    } = useApp();

    const language = getLanguageById(selectedLanguage);
    const currentLetter = language?.letters[currentLetterIndex];

    if (!currentLetter || !language) {
        return null;
    }

    const handleComplete = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        confettiRef.current?.start();
        markLetterComplete(currentLetter.character);

        // Auto advance to next letter or return to grid
        if (currentLetterIndex < language.letters.length - 1) {
            setTimeout(() => {
                setCurrentLetterIndex(currentLetterIndex + 1);
            }, 2500); // Increased delay to enjoy confetti
        } else {
            setTimeout(() => {
                router.back();
            }, 2500);
        }
    };

    const handleNext = () => {
        if (currentLetterIndex < language.letters.length - 1) {
            setCurrentLetterIndex(currentLetterIndex + 1);
        } else {
            router.back();
        }
    };

    const handleHome = () => {
        router.push('/(tabs)');
    };

    const handleReset = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        setResetKey((prev: number) => prev + 1);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable style={styles.homeButton} onPress={handleHome}>
                    <Text style={styles.homeIcon}>🏠</Text>
                </Pressable>

                <ProgressBar
                    current={currentLetterIndex + 1}
                    total={language.letters.length}
                />

                <Pressable style={styles.soundButton}>
                    <Text style={styles.soundIcon}>🔊</Text>
                </Pressable>
            </View>

            {/* Title */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Trace the letter {currentLetter.uppercase || currentLetter.character}
                </Text>
                <Text style={styles.subtitle}>Follow the numbers!</Text>
            </View>

            {/* Tracing Canvas */}
            <View style={styles.canvasContainer}>
                {currentLetter.solidImage ? (
                    <LetterCanvas
                        key={`${currentLetter.character}-${resetKey}`}
                        letter={currentLetter}
                        onComplete={handleComplete}
                    />
                ) : (
                    <TracingCanvas
                        key={`${currentLetter.character}-${resetKey}`}
                        letter={currentLetter}
                        onComplete={handleComplete}
                    />
                )}
            </View>

            {/* Bottom Actions */}
            <View style={styles.bottomActions}>
                <Pressable style={styles.resetButton} onPress={handleReset}>
                    <Text style={styles.resetIcon}>↻</Text>
                    <Text style={styles.resetText}>TRACE</Text>
                </Pressable>

                <Pressable style={styles.nextButton} onPress={handleNext}>
                    <Text style={styles.nextButtonText}>Next →</Text>
                </Pressable>
            </View>

            <ConfettiCannon
                ref={confettiRef}
                count={200}
                origin={{ x: -10, y: 0 }}
                autoStart={false}
                fadeOut={true}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    homeButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#2d2d2d',
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeIcon: {
        fontSize: 20,
    },
    soundButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#2d2d2d',
        justifyContent: 'center',
        alignItems: 'center',
    },
    soundIcon: {
        fontSize: 20,
    },
    titleContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: '900',
        color: '#2d2d2d',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 16,
        color: colors.mediumGray,
        fontWeight: '600',
    },
    canvasContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingBottom: 30,
        gap: 16,
    },
    resetButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 25,
        gap: 6,
        borderWidth: 2,
        borderColor: colors.mediumGray,
    },
    resetIcon: {
        fontSize: 18,
        color: colors.mediumGray,
    },
    resetText: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.mediumGray,
    },
    nextButton: {
        flex: 1,
        backgroundColor: colors.orange,
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    nextButtonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '900',
    },
});


