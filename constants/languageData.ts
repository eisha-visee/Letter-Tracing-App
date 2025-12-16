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
        icon: '🍅', // Using pomogranate as icon
        letters: [], // Will be populated when Hindi data is available
    },
    {
        id: 'kannada',
        name: 'Kannada',
        nativeName: 'ಕನ್ನಡ',
        subtitle: 'ಅ ಆ ಇ ಈ',
        icon: '🤴', // Using king as icon
        letters: [
            // -------- VOWELS --------
            { character: 'ಅ', strokes: getLetterStrokes('ಅ'), image: '👩', word: 'AMMA' },
            { character: 'ಆ', strokes: getLetterStrokes('ಆ'), image: '🐘', word: 'AANE' },
            { character: 'ಇ', strokes: getLetterStrokes('ಇ'), image: '🐀', word: 'ILI' },
            { character: 'ಈ', strokes: getLetterStrokes('ಈ'), image: '🪶', word: 'EEGA' },
            { character: 'ಉ', strokes: getLetterStrokes('ಉ'), image: '🐪', word: 'UNTE' },
            { character: 'ಊ', strokes: getLetterStrokes('ಊ'), image: '🎀', word: 'OORA' },
            { character: 'ಋ', strokes: getLetterStrokes('ಋ'), image: '🧘', word: 'RUSHI' },
            { character: 'ಎ', strokes: getLetterStrokes('ಎ'), image: '🍃', word: 'ELE' },
            { character: 'ಏ', strokes: getLetterStrokes('ಏ'), image: '🦀', word: 'ERU' },
            { character: 'ಐ', strokes: getLetterStrokes('ಐ'), image: '🪞', word: 'AINE' },
            { character: 'ಒ', strokes: getLetterStrokes('ಒ'), image: '🪔', word: 'ONDE' },
            { character: 'ಓ', strokes: getLetterStrokes('ಓ'), image: '🪁', word: 'OOTA' },
            { character: 'ಔ', strokes: getLetterStrokes('ಔ'), image: '💊', word: 'OUSHADHA' },

            // -------- CONSONANTS --------
            { character: 'ಕ', strokes: getLetterStrokes('ಕ'), image: '🐦', word: 'KOKILA' },
            { character: 'ಖ', strokes: getLetterStrokes('ಖ'), image: '🪖', word: 'KHADGA' },
            { character: 'ಗ', strokes: getLetterStrokes('ಗ'), image: '🐄', word: 'GAVU' },
            { character: 'ಘ', strokes: getLetterStrokes('ಘ'), image: '🏠', word: 'GHARA' },
            { character: 'ಙ', strokes: getLetterStrokes('ಙ'), image: '🐍', word: 'NAGA' },

            { character: 'ಚ', strokes: getLetterStrokes('ಚ'), image: '🌙', word: 'CHANDRA' },
            { character: 'ಛ', strokes: getLetterStrokes('ಛ'), image: '☂️', word: 'CHHATRA' },
            { character: 'ಜ', strokes: getLetterStrokes('ಜ'), image: '🌍', word: 'JAGATTU' },
            { character: 'ಝ', strokes: getLetterStrokes('ಝ'), image: '💥', word: 'JHANKARA' },
            { character: 'ಞ', strokes: getLetterStrokes('ಞ'), image: '🧠', word: 'JNANA' },

            { character: 'ಟ', strokes: getLetterStrokes('ಟ'), image: '🛒', word: 'TANGA' },
            { character: 'ಠ', strokes: getLetterStrokes('ಠ'), image: '🧱', word: 'THATTANE' },
            { character: 'ಡ', strokes: getLetterStrokes('ಡ'), image: '🥁', word: 'DAMARU' },
            { character: 'ಢ', strokes: getLetterStrokes('ಢ'), image: '🪵', word: 'DHADHA' },
            { character: 'ಣ', strokes: getLetterStrokes('ಣ'), image: '🐒', word: 'NANDI' },

            { character: 'ತ', strokes: getLetterStrokes('ತ'), image: '⭐', word: 'TARE' },
            { character: 'ಥ', strokes: getLetterStrokes('ಥ'), image: '🏹', word: 'THORANA' },
            { character: 'ದ', strokes: getLetterStrokes('ದ'), image: '🪔', word: 'DEEPA' },
            { character: 'ಧ', strokes: getLetterStrokes('ಧ'), image: '🌾', word: 'DHANYA' },
            { character: 'ನ', strokes: getLetterStrokes('ನ'), image: '🐍', word: 'NAGA' },

            { character: 'ಪ', strokes: getLetterStrokes('ಪ'), image: '🦋', word: 'PATANGA' },
            { character: 'ಫ', strokes: getLetterStrokes('ಫ'), image: '🍎', word: 'PHALA' },
            { character: 'ಬ', strokes: getLetterStrokes('ಬ'), image: '🏹', word: 'BANA' },
            { character: 'ಭ', strokes: getLetterStrokes('ಭ'), image: '🌍', word: 'BHUMI' },
            { character: 'ಮ', strokes: getLetterStrokes('ಮ'), image: '🐟', word: 'MEENU' },

            { character: 'ಯ', strokes: getLetterStrokes('ಯ'), image: '🧘', word: 'YOGA' },
            { character: 'ರ', strokes: getLetterStrokes('ರ'), image: '🌞', word: 'RAVI' },
            { character: 'ಲ', strokes: getLetterStrokes('ಲ'), image: '🍃', word: 'LEAFU' },
            { character: 'ವ', strokes: getLetterStrokes('ವ'), image: '🌧️', word: 'VARSHA' },

            { character: 'ಶ', strokes: getLetterStrokes('ಶ'), image: '🐯', word: 'SHERU' },
            { character: 'ಷ', strokes: getLetterStrokes('ಷ'), image: '🧠', word: 'SHASTRA' },
            { character: 'ಸ', strokes: getLetterStrokes('ಸ'), image: '🐍', word: 'SARPA' },
            { character: 'ಹ', strokes: getLetterStrokes('ಹ'), image: '🌸', word: 'HOOVA' },
            { character: 'ಳ', strokes: getLetterStrokes('ಳ'), image: '🔔', word: 'LALITA' },
        ],
    },
];

export const getLanguageById = (id: string): Language | undefined => {
    return languages.find(lang => lang.id === id);
};

export const getLetterByCharacter = (languageId: string, character: string): Letter | undefined => {
    const language = getLanguageById(languageId);
    return language?.letters.find(letter => letter.character === character);
};
