import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

interface LetterCardProps {
    character: string;
    image: string;
    word: string;
    onPress: () => void;
    isCompleted?: boolean;
}

export const LetterCard = ({ character, image, word, onPress, isCompleted }: LetterCardProps) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
                isCompleted && styles.cardCompleted,
            ]}
            onPress={onPress}
        >
            <View style={styles.imageContainer}>
                <Text style={styles.image}>{image}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.character}>{character}{character.toLowerCase()}</Text>
                <Text style={styles.word}>{word}</Text>
            </View>
            {isCompleted && (
                <View style={styles.completeBadge}>
                    <Text style={styles.checkmark}>✓</Text>
                </View>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '47%',
        aspectRatio: 0.8,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 20,
        padding: 12,
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: 'rgba(126, 200, 80, 0.2)',
    },
    cardPressed: {
        opacity: 0.8,
        transform: [{ scale: 0.96 }],
    },
    cardCompleted: {
        borderColor: colors.vibrantGreen,
        borderWidth: 3,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(255, 225, 200, 0.3)',
        borderRadius: 12,
        marginBottom: 8,
    },
    image: {
        fontSize: 48,
    },
    textContainer: {
        alignItems: 'center',
    },
    character: {
        fontSize: 22,
        fontWeight: '900',
        color: '#2d2d2d',
        marginBottom: 2,
    },
    word: {
        fontSize: 11,
        fontWeight: '600',
        color: colors.orange,
        textTransform: 'uppercase',
    },
    completeBadge: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: colors.vibrantGreen,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmark: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'bold',
    },
});
