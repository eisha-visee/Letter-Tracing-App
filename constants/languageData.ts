import { Language, Letter } from '../types/language';
import { getLetterStrokes } from './letterStrokes';


// English letters A-Z with associated words and images
const englishLetters: Letter[] = [
    { character: 'A', uppercase: 'A', lowercase: 'a', strokes: getLetterStrokes('A'), image: '🍎', word: 'APPLE' },
    { character: 'B', uppercase: 'B', lowercase: 'b', strokes: getLetterStrokes('B'), image: '🐻', word: 'BEAR' },
    { character: 'C', uppercase: 'C', lowercase: 'c', strokes: getLetterStrokes('C'), image: '🐱', word: 'CAT' },
    { character: 'D', uppercase: 'D', lowercase: 'd', strokes: getLetterStrokes('D'), image: '🐕', word: 'DOG' },
    { character: 'E', uppercase: 'E', lowercase: 'e', strokes: getLetterStrokes('E'), image: '🐘', word: 'ELEPHANT' },
    { character: 'F', uppercase: 'F', lowercase: 'f', strokes: getLetterStrokes('F'), image: '🐟', word: 'FISH' },
    { character: 'G', uppercase: 'G', lowercase: 'g', strokes: getLetterStrokes('G'), image: '🦒', word: 'GIRAFFE' },
    { character: 'H', uppercase: 'H', lowercase: 'h', strokes: getLetterStrokes('H'), image: '🦛', word: 'HIPPO' },
    { character: 'I', uppercase: 'I', lowercase: 'i', strokes: getLetterStrokes('I'), image: '🦎', word: 'IGUANA' },
    { character: 'J', uppercase: 'J', lowercase: 'j', strokes: getLetterStrokes('J'), image: '🪼', word: 'JELLYFISH' },
    { character: 'K', uppercase: 'K', lowercase: 'k', strokes: getLetterStrokes('K'), image: '🦘', word: 'KANGAROO' },
    { character: 'L', uppercase: 'L', lowercase: 'l', strokes: getLetterStrokes('L'), image: '🦁', word: 'LION' },
    { character: 'M', uppercase: 'M', lowercase: 'm', strokes: getLetterStrokes('M'), image: '🐵', word: 'MONKEY' },
    { character: 'N', uppercase: 'N', lowercase: 'n', strokes: getLetterStrokes('N'), image: '🪺', word: 'NEST' },
    { character: 'O', uppercase: 'O', lowercase: 'o', strokes: getLetterStrokes('O'), image: '🦉', word: 'OWL' },
    { character: 'P', uppercase: 'P', lowercase: 'p', strokes: getLetterStrokes('P'), image: '🐧', word: 'PENGUIN' },
    { character: 'Q', uppercase: 'Q', lowercase: 'q', strokes: getLetterStrokes('Q'), image: '👑', word: 'QUEEN' },
    { character: 'R', uppercase: 'R', lowercase: 'r', strokes: getLetterStrokes('R'), image: '🐰', word: 'RABBIT' },
    { character: 'S', uppercase: 'S', lowercase: 's', strokes: getLetterStrokes('S'), image: '🐍', word: 'SNAKE' },
    { character: 'T', uppercase: 'T', lowercase: 't', strokes: getLetterStrokes('T'), image: '🐯', word: 'TIGER' },
    { character: 'U', uppercase: 'U', lowercase: 'u', strokes: getLetterStrokes('U'), image: '☂️', word: 'UMBRELLA' },
    { character: 'V', uppercase: 'V', lowercase: 'v', strokes: getLetterStrokes('V'), image: '🎻', word: 'VIOLIN' },
    { character: 'W', uppercase: 'W', lowercase: 'w', strokes: getLetterStrokes('W'), image: '🐋', word: 'WHALE' },
    { character: 'X', uppercase: 'X', lowercase: 'x', strokes: getLetterStrokes('X'), image: '🎹', word: 'XYLOPHONE' },
    { character: 'Y', uppercase: 'Y', lowercase: 'y', strokes: getLetterStrokes('Y'), image: '🧶', word: 'YARN' },
    { character: 'Z', uppercase: 'Z', lowercase: 'z', strokes: getLetterStrokes('Z'), image: '🦓', word: 'ZEBRA' },
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
