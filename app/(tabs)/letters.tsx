import { LetterCard } from '@/components/LetterCard';
import { colors } from '@/constants/colors';
import { getLanguageById } from '@/constants/languageData';
import { useApp } from '@/contexts/AppContext';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function LettersScreen() {
    const router = useRouter();
    const { selectedLanguage, completedLetters, setCurrentLetterIndex } = useApp();

    const language = getLanguageById(selectedLanguage);

    if (!language || language.letters.length === 0) {
        return (
            <View style={[styles.container, styles.centerContent]}>
                <Text style={styles.emptyText}>
                    {language?.name} letters coming soon!
                </Text>
                <Pressable
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <Text style={styles.backButtonText}>← Choose Another Language</Text>
                </Pressable>
            </View>
        );
    }

    const handleLetterPress = (index: number) => {
        setCurrentLetterIndex(index);
        router.push('/trace');
    };

    const handleRandom = () => {
        const randomIndex = Math.floor(Math.random() * language.letters.length);
        handleLetterPress(randomIndex);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable
                    style={styles.backIconButton}
                    onPress={() => router.back()}
                >
                    <Text style={styles.backIcon}>←</Text>
                </Pressable>
                <Text style={styles.title}>Pick a Letter!</Text>
                <View style={{ width: 44 }} />
            </View>

            {/* Letters Grid */}
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.grid}>
                    {language.letters.map((letter, index) => (
                        <LetterCard
                            key={letter.character}
                            character={letter.uppercase || letter.character}
                            image={letter.image}
                            word={letter.word}
                            onPress={() => handleLetterPress(index)}
                            isCompleted={completedLetters.includes(letter.character)}
                        />
                    ))}
                </View>

                {/* Random Button */}
                <View style={styles.randomButtonContainer}>
                    <Pressable style={styles.randomButton} onPress={handleRandom}>
                        <Text style={styles.randomButtonText}>🎲 RANDOM</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
        backgroundColor: '#f5f5f5',
    },
    backIconButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        fontSize: 24,
        color: colors.white,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        fontWeight: '900',
        color: '#2d2d2d',
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    randomButtonContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    randomButton: {
        backgroundColor: colors.orange,
        paddingHorizontal: 40,
        paddingVertical: 16,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    randomButtonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '900',
    },
    emptyText: {
        fontSize: 20,
        color: colors.mediumGray,
        textAlign: 'center',
        marginBottom: 20,
    },
    backButton: {
        backgroundColor: colors.orange,
        paddingHorizontal: 30,
        paddingVertical: 14,
        borderRadius: 25,
    },
    backButtonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '700',
    },
});
