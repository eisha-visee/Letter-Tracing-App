import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

interface ProgressBarProps {
    current: number;
    total: number;
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
    const progress = (current / total) * 100;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{current}/{total}</Text>
            <View style={styles.barContainer}>
                <View style={[styles.barFill, { width: `${progress}%` }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.white,
        marginBottom: 8,
    },
    barContainer: {
        width: 120,
        height: 8,
        backgroundColor: colors.progressBg,
        borderRadius: 4,
        overflow: 'hidden',
    },
    barFill: {
        height: '100%',
        backgroundColor: colors.progressFill,
        borderRadius: 4,
    },
});
