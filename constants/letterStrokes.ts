import { Stroke } from '../types/language';

// SVG coordinates for letter strokes (based on 300x350 viewBox)
// Each stroke has a path with start and end points

export const letterStrokePaths: Record<string, Stroke[]> = {
    A: [
        {
            id: 1,
            points: [
                { x: 150, y: 50 },
                { x: 60, y: 300 },
            ],
            startPoint: { x: 150, y: 50 },
        },
        {
            id: 2,
            points: [
                { x: 150, y: 50 },
                { x: 240, y: 300 },
            ],
            startPoint: { x: 150, y: 50 },
        },
        {
            id: 3,
            points: [
                { x: 85, y: 210 },
                { x: 215, y: 210 },
            ],
            startPoint: { x: 85, y: 210 },
        },
    ],
    B: [
        {
            id: 1,
            points: [
                { x: 70, y: 50 },
                { x: 70, y: 300 },
            ],
            startPoint: { x: 70, y: 50 },
        },
        {
            id: 2,
            points: [
                { x: 70, y: 50 },
                { x: 180, y: 50 },
                { x: 200, y: 80 },
                { x: 200, y: 140 },
                { x: 180, y: 170 },
                { x: 70, y: 170 },
            ],
            startPoint: { x: 70, y: 50 },
        },
        {
            id: 3,
            points: [
                { x: 70, y: 170 },
                { x: 190, y: 170 },
                { x: 220, y: 200 },
                { x: 220, y: 270 },
                { x: 190, y: 300 },
                { x: 70, y: 300 },
            ],
            startPoint: { x: 70, y: 170 },
        },
    ],
    C: [
        {
            id: 1,
            points: [
                { x: 230, y: 80 },
                { x: 200, y: 50 },
                { x: 120, y: 50 },
                { x: 70, y: 100 },
                { x: 70, y: 250 },
                { x: 120, y: 300 },
                { x: 200, y: 300 },
                { x: 230, y: 270 },
            ],
            startPoint: { x: 230, y: 80 },
        },
    ],
    D: [
        {
            id: 1,
            points: [
                { x: 70, y: 50 },
                { x: 70, y: 300 },
            ],
            startPoint: { x: 70, y: 50 },
        },
        {
            id: 2,
            points: [
                { x: 70, y: 50 },
                { x: 160, y: 50 },
                { x: 220, y: 110 },
                { x: 220, y: 240 },
                { x: 160, y: 300 },
                { x: 70, y: 300 },
            ],
            startPoint: { x: 70, y: 50 },
        },
    ],
    E: [
        {
            id: 1,
            points: [
                { x: 90, y: 50 },
                { x: 90, y: 300 },
            ],
            startPoint: { x: 90, y: 50 },
        },
        {
            id: 2,
            points: [
                { x: 90, y: 50 },
                { x: 230, y: 50 },
            ],
            startPoint: { x: 90, y: 50 },
        },
        {
            id: 3,
            points: [
                { x: 90, y: 175 },
                { x: 210, y: 175 },
            ],
            startPoint: { x: 90, y: 175 },
        },
        {
            id: 4,
            points: [
                { x: 90, y: 300 },
                { x: 230, y: 300 },
            ],
            startPoint: { x: 90, y: 300 },
        },
    ],
    F: [
        {
            id: 1,
            points: [
                { x: 90, y: 50 },
                { x: 90, y: 300 },
            ],
            startPoint: { x: 90, y: 50 },
        },
        {
            id: 2,
            points: [
                { x: 90, y: 50 },
                { x: 230, y: 50 },
            ],
            startPoint: { x: 90, y: 50 },
        },
        {
            id: 3,
            points: [
                { x: 90, y: 160 },
                { x: 210, y: 160 },
            ],
            startPoint: { x: 90, y: 160 },
        },
    ],
    G: [
        {
            id: 1,
            points: [
                { x: 230, y: 80 },
                { x: 200, y: 50 },
                { x: 120, y: 50 },
                { x: 70, y: 100 },
                { x: 70, y: 250 },
                { x: 120, y: 300 },
                { x: 200, y: 300 },
                { x: 230, y: 270 },
                { x: 230, y: 175 },
                { x: 165, y: 175 },
            ],
            startPoint: { x: 230, y: 80 },
        },
    ],
    H: [
        {
            id: 1,
            points: [
                { x: 80, y: 50 },
                { x: 80, y: 300 },
            ],
            startPoint: { x: 80, y: 50 },
        },
        {
            id: 2,
            points: [
                { x: 220, y: 50 },
                { x: 220, y: 300 },
            ],
            startPoint: { x: 220, y: 50 },
        },
        {
            id: 3,
            points: [
                { x: 80, y: 175 },
                { x: 220, y: 175 },
            ],
            startPoint: { x: 80, y: 175 },
        },
    ],
    I: [
        {
            id: 1,
            points: [
                { x: 150, y: 50 },
                { x: 150, y: 300 },
            ],
            startPoint: { x: 150, y: 50 },
        },
        {
            id: 2,
            points: [
                { x: 100, y: 50 },
                { x: 200, y: 50 },
            ],
            startPoint: { x: 100, y: 50 },
        },
        {
            id: 3,
            points: [
                { x: 100, y: 300 },
                { x: 200, y: 300 },
            ],
            startPoint: { x: 100, y: 300 },
        },
    ],
    J: [
        {
            id: 1,
            points: [
                { x: 180, y: 50 },
                { x: 180, y: 260 },
                { x: 150, y: 300 },
                { x: 100, y: 300 },
                { x: 70, y: 270 },
            ],
            startPoint: { x: 180, y: 50 },
        },
    ],
    K: [
        {
            id: 1,
            points: [
                { x: 80, y: 50 },
                { x: 80, y: 300 },
            ],
            startPoint: { x: 80, y: 50 },
        },
        {
            id: 2,
            points: [
                { x: 220, y: 50 },
                { x: 80, y: 175 },
            ],
            startPoint: { x: 220, y: 50 },
        },
        {
            id: 3,
            points: [
                { x: 135, y: 130 },
                { x: 220, y: 300 },
            ],
            startPoint: { x: 135, y: 130 },
        },
    ],
    L: [
        {
            id: 1,
            points: [
                { x: 90, y: 50 },
                { x: 90, y: 300 },
            ],
            startPoint: { x: 90, y: 50 },
        },
        {
            id: 2,
            points: [
                { x: 90, y: 300 },
                { x: 230, y: 300 },
            ],
            startPoint: { x: 90, y: 300 },
        },
    ],
    M: [
        {
            id: 1,
            points: [
                { x: 60, y: 300 },
                { x: 60, y: 50 },
            ],
            startPoint: { x: 60, y: 300 },
        },
        {
            id: 2,
            points: [
                { x: 60, y: 50 },
                { x: 150, y: 180 },
            ],
            startPoint: { x: 60, y: 50 },
        },
        {
            id: 3,
            points: [
                { x: 150, y: 180 },
                { x: 240, y: 50 },
            ],
            startPoint: { x: 150, y: 180 },
        },
        {
            id: 4,
            points: [
                { x: 240, y: 50 },
                { x: 240, y: 300 },
            ],
            startPoint: { x: 240, y: 50 },
        },
    ],
    N: [
        {
            id: 1,
            points: [
                { x: 70, y: 300 },
                { x: 70, y: 50 },
            ],
            startPoint: { x: 70, y: 300 },
        },
        {
            id: 2,
            points: [
                { x: 70, y: 50 },
                { x: 230, y: 300 },
            ],
            startPoint: { x: 70, y: 50 },
        },
        {
            id: 3,
            points: [
                { x: 230, y: 300 },
                { x: 230, y: 50 },
            ],
            startPoint: { x: 230, y: 300 },
        },
    ],
    O: [
        {
            id: 1,
            points: [
                { x: 150, y: 50 },
                { x: 90, y: 80 },
                { x: 70, y: 140 },
                { x: 70, y: 210 },
                { x: 90, y: 270 },
                { x: 150, y: 300 },
                { x: 210, y: 270 },
                { x: 230, y: 210 },
                { x: 230, y: 140 },
                { x: 210, y: 80 },
                { x: 150, y: 50 },
            ],
            startPoint: { x: 150, y: 50 },
        },
    ],
    P: [
        {
            id: 1,
            points: [
                { x: 70, y: 50 },
                { x: 70, y: 300 },
            ],
            startPoint: { x: 70, y: 50 },
        },
        {
            id: 2,
            points: [
                { x: 70, y: 50 },
                { x: 180, y: 50 },
                { x: 220, y: 90 },
                { x: 220, y: 145 },
                { x: 180, y: 185 },
                { x: 70, y: 185 },
            ],
            startPoint: { x: 70, y: 50 },
        },
    ],
    Q: [
        {
            id: 1,
            points: [
                { x: 150, y: 50 },
                { x: 90, y: 80 },
                { x: 70, y: 140 },
                { x: 70, y: 210 },
                { x: 90, y: 270 },
                { x: 150, y: 300 },
                { x: 210, y: 270 },
                { x: 230, y: 210 },
                { x: 230, y: 140 },
                { x: 210, y: 80 },
                { x: 150, y: 50 },
            ],
            startPoint: { x: 150, y: 50 },
        },
        {
            id: 2,
            points: [
                { x: 180, y: 240 },
                { x: 240, y: 310 },
            ],
            startPoint: { x: 180, y: 240 },
        },
    ],
    R: [
        {
            id: 1,
            points: [
                { x: 70, y: 50 },
                { x: 70, y: 300 },
            ],
            startPoint: { x: 70, y: 50 },
        },
        {
            id: 2,
            points: [
                { x: 70, y: 50 },
                { x: 180, y: 50 },
                { x: 220, y: 90 },
                { x: 220, y: 145 },
                { x: 180, y: 185 },
                { x: 70, y: 185 },
            ],
            startPoint: { x: 70, y: 50 },
        },
        {
            id: 3,
            points: [
                { x: 130, y: 185 },
                { x: 220, y: 300 },
            ],
            startPoint: { x: 130, y: 185 },
        },
    ],
    S: [
        {
            id: 1,
            points: [
                { x: 220, y: 90 },
                { x: 190, y: 55 },
                { x: 110, y: 55 },
                { x: 80, y: 90 },
                { x: 95, y: 130 },
                { x: 150, y: 155 },
                { x: 205, y: 180 },
                { x: 220, y: 220 },
                { x: 190, y: 265 },
                { x: 110, y: 265 },
                { x: 80, y: 230 },
            ],
            startPoint: { x: 220, y: 90 },
        },
    ],
    T: [
        {
            id: 1,
            points: [
                { x: 70, y: 50 },
                { x: 230, y: 50 },
            ],
            startPoint: { x: 70, y: 50 },
        },
        {
            id: 2,
            points: [
                { x: 150, y: 50 },
                { x: 150, y: 300 },
            ],
            startPoint: { x: 150, y: 50 },
        },
    ],
    U: [
        {
            id: 1,
            points: [
                { x: 80, y: 50 },
                { x: 80, y: 240 },
                { x: 110, y: 280 },
                { x: 150, y: 300 },
                { x: 190, y: 280 },
                { x: 220, y: 240 },
                { x: 220, y: 50 },
            ],
            startPoint: { x: 80, y: 50 },
        },
    ],
    V: [
        {
            id: 1,
            points: [
                { x: 60, y: 50 },
                { x: 150, y: 300 },
            ],
            startPoint: { x: 60, y: 50 },
        },
        {
            id: 2,
            points: [
                { x: 150, y: 300 },
                { x: 240, y: 50 },
            ],
            startPoint: { x: 150, y: 300 },
        },
    ],
    W: [
        {
            id: 1,
            points: [
                { x: 50, y: 50 },
                { x: 90, y: 300 },
            ],
            startPoint: { x: 50, y: 50 },
        },
        {
            id: 2,
            points: [
                { x: 90, y: 300 },
                { x: 150, y: 150 },
            ],
            startPoint: { x: 90, y: 300 },
        },
        {
            id: 3,
            points: [
                { x: 150, y: 150 },
                { x: 210, y: 300 },
            ],
            startPoint: { x: 150, y: 150 },
        },
        {
            id: 4,
            points: [
                { x: 210, y: 300 },
                { x: 250, y: 50 },
            ],
            startPoint: { x: 210, y: 300 },
        },
    ],
    X: [
        {
            id: 1,
            points: [
                { x: 70, y: 50 },
                { x: 230, y: 300 },
            ],
            startPoint: { x: 70, y: 50 },
        },
        {
            id: 2,
            points: [
                { x: 230, y: 50 },
                { x: 70, y: 300 },
            ],
            startPoint: { x: 230, y: 50 },
        },
    ],
    Y: [
        {
            id: 1,
            points: [
                { x: 70, y: 50 },
                { x: 150, y: 175 },
            ],
            startPoint: { x: 70, y: 50 },
        },
        {
            id: 2,
            points: [
                { x: 230, y: 50 },
                { x: 150, y: 175 },
            ],
            startPoint: { x: 230, y: 50 },
        },
        {
            id: 3,
            points: [
                { x: 150, y: 175 },
                { x: 150, y: 300 },
            ],
            startPoint: { x: 150, y: 175 },
        },
    ],
    Z: [
        {
            id: 1,
            points: [
                { x: 70, y: 50 },
                { x: 230, y: 50 },
            ],
            startPoint: { x: 70, y: 50 },
        },
        {
            id: 2,
            points: [
                { x: 230, y: 50 },
                { x: 70, y: 300 },
            ],
            startPoint: { x: 230, y: 50 },
        },
        {
            id: 3,
            points: [
                { x: 70, y: 300 },
                { x: 230, y: 300 },
            ],
            startPoint: { x: 70, y: 300 },
        },
    ],
    // Add more letters as needed - for now providing A-E as examples
};

// Helper function to get strokes for a letter
export const getLetterStrokes = (letter: string): Stroke[] => {
    return letterStrokePaths[letter.toUpperCase()] || [];
};
