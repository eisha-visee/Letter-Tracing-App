import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

interface LanguageCardProps {
    icon: string;
    name: string;
    nativeName: string;
    subtitle: string;
    onPress: () => void;
}

export const LanguageCard = ({ icon, name, nativeName, subtitle, onPress }: LanguageCardProps) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
            ]}
            onPress={onPress}
        >
            <View style={styles.iconContainer}>
                <Text style={styles.icon}>{icon}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{nativeName}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <View style={styles.arrow}>
                <Text style={styles.arrowIcon}>▶</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(45, 95, 77, 0.4)',
        borderRadius: 24,
        padding: 16,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    cardPressed: {
        opacity: 0.7,
        transform: [{ scale: 0.98 }],
    },
    iconContainer: {
        width: 70,
        height: 70,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    icon: {
        fontSize: 36,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 24,
        fontWeight: '700',
        color: colors.white,
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 16,
        color: colors.lightGray,
    },
    arrow: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.vibrantGreen,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowIcon: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
