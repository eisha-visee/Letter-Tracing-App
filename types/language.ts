// Types for language data

export interface StrokePoint {
    x: number;
    y: number;
}

export interface Stroke {
    id: number;
    points: StrokePoint[];
    startPoint: StrokePoint;
}

export interface Letter {
    character: string;
    uppercase?: string;
    lowercase?: string;
    strokes: Stroke[];
    image: string; // Using emoji or placeholder for now
    word: string;
    audioFile?: string;
}

export interface Language {
    id: string;
    name: string;
    nativeName: string;
    subtitle: string;
    icon: string; // emoji for now
    letters: Letter[];
}

export interface UserProgress {
    languageId: string;
    completedLetters: string[];
    currentLetterIndex: number;
}
