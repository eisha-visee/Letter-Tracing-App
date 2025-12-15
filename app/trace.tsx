import { ProgressBar } from '@/components/ProgressBar';
import { TracingCanvas } from '@/components/TracingCanvas';
import { colors } from '@/constants/colors';
import { getLanguageById } from '@/constants/languageData';
import { useApp } from '@/contexts/AppContext';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TraceScreen() {
    const router = useRouter();
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
        markLetterComplete(currentLetter.character);

        // Auto advance to next letter or return to grid
        if (currentLetterIndex < language.letters.length - 1) {
            setTimeout(() => {
                setCurrentLetterIndex(currentLetterIndex + 1);
            }, 1000);
        } else {
            setTimeout(() => {
                router.back();
            }, 1000);
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
        // Force re-render by creating a new component instance
        setCurrentLetterIndex(currentLetterIndex);
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
                <TracingCanvas letter={currentLetter} onComplete={handleComplete} />
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
        paddingHorizontal: 30,
        paddingBottom: 40,
        gap: 20,
    },
    resetButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 30,
        gap: 8,
        borderWidth: 2,
        borderColor: colors.mediumGray,
    },
    resetIcon: {
        fontSize: 20,
        color: colors.mediumGray,
    },
    resetText: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.mediumGray,
    },
    nextButton: {
        flex: 1,
        backgroundColor: colors.orange,
        paddingVertical: 18,
        borderRadius: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    nextButtonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '900',
    },
});
