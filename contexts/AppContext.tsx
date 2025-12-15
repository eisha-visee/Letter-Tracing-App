import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { UserProgress } from '../types/language';

interface AppContextType {
    selectedLanguage: string;
    setSelectedLanguage: (id: string) => void;
    currentLetterIndex: number;
    setCurrentLetterIndex: (index: number) => void;
    completedLetters: string[];
    markLetterComplete: (letter: string) => void;
    progress: UserProgress | null;
    resetProgress: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY = '@letter_trace_progress';

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('english');
    const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0);
    const [completedLetters, setCompletedLetters] = useState<string[]>([]);
    const [progress, setProgress] = useState<UserProgress | null>(null);

    // Load progress from storage
    useEffect(() => {
        loadProgress();
    }, []);

    // Save progress when it changes
    useEffect(() => {
        if (progress) {
            saveProgress();
        }
    }, [progress, completedLetters, currentLetterIndex]);

    const loadProgress = async () => {
        try {
            const stored = await AsyncStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed: UserProgress = JSON.parse(stored);
                setProgress(parsed);
                setSelectedLanguage(parsed.languageId);
                setCurrentLetterIndex(parsed.currentLetterIndex);
                setCompletedLetters(parsed.completedLetters);
            }
        } catch (error) {
            console.error('Error loading progress:', error);
        }
    };

    const saveProgress = async () => {
        try {
            const progressData: UserProgress = {
                languageId: selectedLanguage,
                currentLetterIndex,
                completedLetters,
            };
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
            setProgress(progressData);
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    };

    const markLetterComplete = (letter: string) => {
        if (!completedLetters.includes(letter)) {
            setCompletedLetters([...completedLetters, letter]);
        }
    };

    const resetProgress = async () => {
        try {
            await AsyncStorage.removeItem(STORAGE_KEY);
            setCurrentLetterIndex(0);
            setCompletedLetters([]);
            setProgress(null);
        } catch (error) {
            console.error('Error resetting progress:', error);
        }
    };

    return (
        <AppContext.Provider
            value={{
                selectedLanguage,
                setSelectedLanguage,
                currentLetterIndex,
                setCurrentLetterIndex,
                completedLetters,
                markLetterComplete,
                progress,
                resetProgress,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within AppProvider');
    }
    return context;
};
