import { Language, Letter, Stroke } from '../types/language';

// Helper function to create simple strokes for uppercase letters
// These are simplified representations - actual stroke paths would be more detailed
const createLetterStrokes = (letter: string): Stroke[] => {
    // For now, return simplified stroke data
    // In production, these would be detailed SVG paths
    switch (letter) {
        case 'A':
            return [
                { id: 1, points: [], startPoint: { x: 50, y: 20 } },
                { id: 2, points: [], startPoint: { x: 50, y: 20 } },
                { id: 3, points: [], startPoint: { x: 20, y: 60 } },
            ];
        // Add more letters as needed
        default:
            return [
                { id: 1, points: [], startPoint: { x: 30, y: 30 } },
                { id: 2, points: [], startPoint: { x: 30, y: 70 } },
            ];
    }
};

// English letters A-Z with associated words and images
const englishLetters: Letter[] = [
    { character: 'A', uppercase: 'A', lowercase: 'a', strokes: createLetterStrokes('A'), image: '🍎', word: 'APPLE' },
    { character: 'B', uppercase: 'B', lowercase: 'b', strokes: createLetterStrokes('B'), image: '🐻', word: 'BEAR' },
    { character: 'C', uppercase: 'C', lowercase: 'c', strokes: createLetterStrokes('C'), image: '🐱', word: 'CAT' },
    { character: 'D', uppercase: 'D', lowercase: 'd', strokes: createLetterStrokes('D'), image: '🐕', word: 'DOG' },
    { character: 'E', uppercase: 'E', lowercase: 'e', strokes: createLetterStrokes('E'), image: '🐘', word: 'ELEPHANT' },
    { character: 'F', uppercase: 'F', lowercase: 'f', strokes: createLetterStrokes('F'), image: '🐟', word: 'FISH' },
    { character: 'G', uppercase: 'G', lowercase: 'g', strokes: createLetterStrokes('G'), image: '🦒', word: 'GIRAFFE' },
    { character: 'H', uppercase: 'H', lowercase: 'h', strokes: createLetterStrokes('H'), image: '🦛', word: 'HIPPO' },
    { character: 'I', uppercase: 'I', lowercase: 'i', strokes: createLetterStrokes('I'), image: '🦎', word: 'IGUANA' },
    { character: 'J', uppercase: 'J', lowercase: 'j', strokes: createLetterStrokes('J'), image: '🪼', word: 'JELLYFISH' },
    { character: 'K', uppercase: 'K', lowercase: 'k', strokes: createLetterStrokes('K'), image: '🦘', word: 'KANGAROO' },
    { character: 'L', uppercase: 'L', lowercase: 'l', strokes: createLetterStrokes('L'), image: '🦁', word: 'LION' },
    { character: 'M', uppercase: 'M', lowercase: 'm', strokes: createLetterStrokes('M'), image: '🐵', word: 'MONKEY' },
    { character: 'N', uppercase: 'N', lowercase: 'n', strokes: createLetterStrokes('N'), image: '🪺', word: 'NEST' },
    { character: 'O', uppercase: 'O', lowercase: 'o', strokes: createLetterStrokes('O'), image: '🦉', word: 'OWL' },
    { character: 'P', uppercase: 'P', lowercase: 'p', strokes: createLetterStrokes('P'), image: '🐧', word: 'PENGUIN' },
    { character: 'Q', uppercase: 'Q', lowercase: 'q', strokes: createLetterStrokes('Q'), image: '👑', word: 'QUEEN' },
    { character: 'R', uppercase: 'R', lowercase: 'r', strokes: createLetterStrokes('R'), image: '🐰', word: 'RABBIT' },
    { character: 'S', uppercase: 'S', lowercase: 's', strokes: createLetterStrokes('S'), image: '🐍', word: 'SNAKE' },
    { character: 'T', uppercase: 'T', lowercase: 't', strokes: createLetterStrokes('T'), image: '🐯', word: 'TIGER' },
    { character: 'U', uppercase: 'U', lowercase: 'u', strokes: createLetterStrokes('U'), image: '☂️', word: 'UMBRELLA' },
    { character: 'V', uppercase: 'V', lowercase: 'v', strokes: createLetterStrokes('V'), image: '🎻', word: 'VIOLIN' },
    { character: 'W', uppercase: 'W', lowercase: 'w', strokes: createLetterStrokes('W'), image: '🐋', word: 'WHALE' },
    { character: 'X', uppercase: 'X', lowercase: 'x', strokes: createLetterStrokes('X'), image: '🎹', word: 'XYLOPHONE' },
    { character: 'Y', uppercase: 'Y', lowercase: 'y', strokes: createLetterStrokes('Y'), image: '🧶', word: 'YARN' },
    { character: 'Z', uppercase: 'Z', lowercase: 'z', strokes: createLetterStrokes('Z'), image: '🦓', word: 'ZEBRA' },
];

// Language definitions
export const languages: Language[] = [
    {
        id: 'english',
        name: 'English',
        nativeName: 'English',
        subtitle: 'Learn ABCs',
        icon: '🍎', // Using apple as icon, you can replace with owl image
        letters: englishLetters,
    },
    {
        id: 'hindi',
        name: 'Hindi',
        nativeName: 'हिंदी',
        subtitle: 'अ से अनार',
        icon: '🥭', // Using mango as icon
        letters: [], // Will be populated when Hindi data is available
    },
    {
        id: 'kannada',
        name: 'Kannada',
        nativeName: 'ಕನ್ನಡ',
        subtitle: 'ಅ ಆ ಇ ಈ',
        icon: '🥥', // Using coconut as icon
        letters: [], // Will be populated when Kannada data is available
    },
];

export const getLanguageById = (id: string): Language | undefined => {
    return languages.find(lang => lang.id === id);
};

export const getLetterByCharacter = (languageId: string, character: string): Letter | undefined => {
    const language = getLanguageById(languageId);
    return language?.letters.find(letter => letter.character === character);
};
