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
        icon: '🍍', // Using pineapple as icon
        letters: [], // Will be populated when Hindi data is available
    },
    {
        id: 'kannada',
        name: 'Kannada',
        nativeName: 'ಕನ್ನಡ',
        subtitle: 'ಅ ಆ ಇ ಈ',
        icon: '🤴', // Using king as icon
        letters: [

            // -------- VOWELS (15) --------
            { character: 'ಅ', strokes: getLetterStrokes('ಅ'), image: '👩', word: 'AMMA', solidImage: require('../assets/images/solid_A.png'), hintImage: require('../assets/images/hint_A.png') },
            { character: 'ಆ', strokes: getLetterStrokes('ಆ'), image: '🐘', word: 'AANE', solidImage: require('../assets/images/solid_AA.png'), hintImage: require('../assets/images/hint_AA.png') },
            { character: 'ಇ', strokes: getLetterStrokes('ಇ'), image: '🐀', word: 'ILI', solidImage: require('../assets/images/solid_I.png'), hintImage: require('../assets/images/hint_I.png') },
            { character: 'ಈ', strokes: getLetterStrokes('ಈ'), image: '🪶', word: 'EEGA', solidImage: require('../assets/images/solid_II.png'), hintImage: require('../assets/images/hint_II.png') },
            { character: 'ಉ', strokes: getLetterStrokes('ಉ'), image: '🐪', word: 'UNTE', solidImage: require('../assets/images/solid_U.png'), hintImage: require('../assets/images/hint_U.png') },
            { character: 'ಊ', strokes: getLetterStrokes('ಊ'), image: '🎀', word: 'OORA', solidImage: require('../assets/images/solid_UU.png'), hintImage: require('../assets/images/hint_UU.png') },
            { character: 'ಋ', strokes: getLetterStrokes('ಋ'), image: '🧘', word: 'RUSHI', solidImage: require('../assets/images/solid_RU.png'), hintImage: require('../assets/images/hint_RU.png') },
            { character: 'ಎ', strokes: getLetterStrokes('ಎ'), image: '🍃', word: 'ELE', solidImage: require('../assets/images/solid_E.png'), hintImage: require('../assets/images/hint_E.png') },
            { character: 'ಏ', strokes: getLetterStrokes('ಏ'), image: '🦀', word: 'ERU', solidImage: require('../assets/images/solid_EE.png'), hintImage: require('../assets/images/hint_EE.png') },
            { character: 'ಐ', strokes: getLetterStrokes('ಐ'), image: '🪞', word: 'AINE', solidImage: require('../assets/images/solid_AI.png'), hintImage: require('../assets/images/hint_AI.png') },
            { character: 'ಒ', strokes: getLetterStrokes('ಒ'), image: '🪔', word: 'ONDE', solidImage: require('../assets/images/solid_O.png'), hintImage: require('../assets/images/hint_O.png') },
            { character: 'ಓ', strokes: getLetterStrokes('ಓ'), image: '🪁', word: 'OOTA', solidImage: require('../assets/images/solid_OO.png'), hintImage: require('../assets/images/hint_OO.png') },
            { character: 'ಔ', strokes: getLetterStrokes('ಔ'), image: '💊', word: 'OUSHADHA', solidImage: require('../assets/images/solid_AU.png'), hintImage: require('../assets/images/hint_AU.png') },
            { character: 'ಅಂ', strokes: getLetterStrokes('ಅಂ'), image: '🔔', word: 'AMMA', solidImage: require('../assets/images/solid_AMM.png'), hintImage: require('../assets/images/hint_AMM.png') },
            { character: 'ಅಃ', strokes: getLetterStrokes('ಅಃ'), image: '🌟', word: 'AAHA', solidImage: require('../assets/images/solid_AHA.png'), hintImage: require('../assets/images/hint_AHA.png') },

            // -------- CONSONANTS (34) --------
            { character: 'ಕ', strokes: getLetterStrokes('ಕ'), image: '🐦', word: 'KOKILA', solidImage: require('../assets/images/solid_KA.png'), hintImage: require('../assets/images/hint_KA.png') },
            { character: 'ಖ', strokes: getLetterStrokes('ಖ'), image: '🪖', word: 'KHADGA', solidImage: require('../assets/images/solid_KHA.png'), hintImage: require('../assets/images/hint_KHA.png') },
            { character: 'ಗ', strokes: getLetterStrokes('ಗ'), image: '🐄', word: 'GAVU', solidImage: require('../assets/images/solid_GA.png'), hintImage: require('../assets/images/hint_GA.png') },
            { character: 'ಘ', strokes: getLetterStrokes('ಘ'), image: '🏠', word: 'GHARA', solidImage: require('../assets/images/solid_GHA.png'), hintImage: require('../assets/images/hint_GHA.png') },
            { character: 'ಙ', strokes: getLetterStrokes('ಙ'), image: '🐍', word: 'NAGA', solidImage: require('../assets/images/solid_NGA.png'), hintImage: require('../assets/images/hint_NGA.png') },

            { character: 'ಚ', strokes: getLetterStrokes('ಚ'), image: '🌙', word: 'CHANDRA', solidImage: require('../assets/images/solid_CHA.png'), hintImage: require('../assets/images/hint_CHA.png') },
            { character: 'ಛ', strokes: getLetterStrokes('ಛ'), image: '☂️', word: 'CHHATRA', solidImage: require('../assets/images/solid_CHHA.png'), hintImage: require('../assets/images/hint_CHHA.png') },
            { character: 'ಜ', strokes: getLetterStrokes('ಜ'), image: '🌍', word: 'JAGATTU', solidImage: require('../assets/images/solid_JA.png'), hintImage: require('../assets/images/hint_JA.png') },
            { character: 'ಝ', strokes: getLetterStrokes('ಝ'), image: '💥', word: 'JHANKARA', solidImage: require('../assets/images/solid_JHA.png'), hintImage: require('../assets/images/hint_JHA.png') },
            { character: 'ಞ', strokes: getLetterStrokes('ಞ'), image: '🧠', word: 'JNANA', solidImage: require('../assets/images/solid_NYA.png'), hintImage: require('../assets/images/hint_NYA.png') },

            { character: 'ಟ', strokes: getLetterStrokes('ಟ'), image: '🛒', word: 'TANGA', solidImage: require('../assets/images/solid_TA1.png'), hintImage: require('../assets/images/hint_TA1.png') },
            { character: 'ಠ', strokes: getLetterStrokes('ಠ'), image: '🧱', word: 'THATTANE', solidImage: require('../assets/images/solid_THA1.png'), hintImage: require('../assets/images/hint_THA1.png') },
            { character: 'ಡ', strokes: getLetterStrokes('ಡ'), image: '🥁', word: 'DAMARU', solidImage: require('../assets/images/solid_DA1.png'), hintImage: require('../assets/images/hint_DA1.png') },
            { character: 'ಢ', strokes: getLetterStrokes('ಢ'), image: '🪵', word: 'DHADHA', solidImage: require('../assets/images/solid_DHA1.png'), hintImage: require('../assets/images/hint_DHA1.png') },
            { character: 'ಣ', strokes: getLetterStrokes('ಣ'), image: '🐒', word: 'NANDI', solidImage: require('../assets/images/solid_NA1.png'), hintImage: require('../assets/images/hint_NA1.png') },

            { character: 'ತ', strokes: getLetterStrokes('ತ'), image: '⭐', word: 'TARE', solidImage: require('../assets/images/solid_TA2.png'), hintImage: require('../assets/images/hint_TA2.png') },
            { character: 'ಥ', strokes: getLetterStrokes('ಥ'), image: '🏹', word: 'THORANA', solidImage: require('../assets/images/solid_THA2.png'), hintImage: require('../assets/images/hint_THA2.png') },
            { character: 'ದ', strokes: getLetterStrokes('ದ'), image: '🪔', word: 'DEEPA', solidImage: require('../assets/images/solid_DA2.png'), hintImage: require('../assets/images/hint_DA2.png') },
            { character: 'ಧ', strokes: getLetterStrokes('ಧ'), image: '🌾', word: 'DHANYA', solidImage: require('../assets/images/solid_DHA2.png'), hintImage: require('../assets/images/hint_DHA2.png') },
            { character: 'ನ', strokes: getLetterStrokes('ನ'), image: '🐍', word: 'NAGA', solidImage: require('../assets/images/solid_NA2.png'), hintImage: require('../assets/images/hint_NA2.png') },

            { character: 'ಪ', strokes: getLetterStrokes('ಪ'), image: '🦋', word: 'PATANGA', solidImage: require('../assets/images/solid_PA.png'), hintImage: require('../assets/images/hint_PA.png') },
            { character: 'ಫ', strokes: getLetterStrokes('ಫ'), image: '🍎', word: 'PHALA', solidImage: require('../assets/images/solid_PHA.png'), hintImage: require('../assets/images/hint_PHA.png') },
            { character: 'ಬ', strokes: getLetterStrokes('ಬ'), image: '🏹', word: 'BANA', solidImage: require('../assets/images/solid_BA-Photoroom.png'), hintImage: require('../assets/images/hint_BA.png') },
            { character: 'ಭ', strokes: getLetterStrokes('ಭ'), image: '🌍', word: 'BHUMI', solidImage: require('../assets/images/solid_BHA.png'), hintImage: require('../assets/images/hint_BHA.png') },
            { character: 'ಮ', strokes: getLetterStrokes('ಮ'), image: '🐟', word: 'MEENU', solidImage: require('../assets/images/solid_MA.png'), hintImage: require('../assets/images/hint_MA.png') },

            { character: 'ಯ', strokes: getLetterStrokes('ಯ'), image: '🧘', word: 'YOGA', solidImage: require('../assets/images/solid_YA.png'), hintImage: require('../assets/images/hint_YA.png') },
            { character: 'ರ', strokes: getLetterStrokes('ರ'), image: '🌞', word: 'RAVI', solidImage: require('../assets/images/solid_RA.png'), hintImage: require('../assets/images/hint_RA.png') },
            { character: 'ಲ', strokes: getLetterStrokes('ಲ'), image: '🍃', word: 'LEAFU', solidImage: require('../assets/images/solid_LA.png'), hintImage: require('../assets/images/hint_LA.png') },
            { character: 'ವ', strokes: getLetterStrokes('ವ'), image: '🌧️', word: 'VARSHA', solidImage: require('../assets/images/solid_VA.png'), hintImage: require('../assets/images/hint_VA.png') },

            { character: 'ಶ', strokes: getLetterStrokes('ಶ'), image: '🐯', word: 'SHERU', solidImage: require('../assets/images/solid_SA1.png'), hintImage: require('../assets/images/hint_SA1.png') },
            { character: 'ಷ', strokes: getLetterStrokes('ಷ'), image: '🧠', word: 'SHASTRA', solidImage: require('../assets/images/solid_SHA.png'), hintImage: require('../assets/images/hint_SHA.png') },
            { character: 'ಸ', strokes: getLetterStrokes('ಸ'), image: '🐍', word: 'SARPA', solidImage: require('../assets/images/solid_SAA.png'), hintImage: require('../assets/images/hint_SAA.png') },
            { character: 'ಹ', strokes: getLetterStrokes('ಹ'), image: '🌸', word: 'HOOVA', solidImage: require('../assets/images/solid_HA.png'), hintImage: require('../assets/images/hint_HA.png') },
            { character: 'ಳ', strokes: getLetterStrokes('ಳ'), image: '🔔', word: 'LALITA', solidImage: require('../assets/images/solid_LA2.png'), hintImage: require('../assets/images/hint_LA2.png') },
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
