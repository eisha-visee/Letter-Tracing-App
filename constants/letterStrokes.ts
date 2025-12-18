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
    // Kannada Letters - CONSONANTS
    'ಕ': [{ id: 1, points: [{ x: 100, y: 150 }, { x: 110, y: 120 }, { x: 130, y: 110 }, { x: 150, y: 120 }, { x: 160, y: 150 }, { x: 150, y: 180 }, { x: 130, y: 190 }, { x: 110, y: 180 }, { x: 100, y: 150 }], startPoint: { x: 100, y: 150 } }, { id: 2, points: [{ x: 160, y: 150 }, { x: 200, y: 150 }, { x: 200, y: 100 }], startPoint: { x: 160, y: 150 } }, { id: 3, points: [{ x: 150, y: 100 }, { x: 250, y: 100 }], startPoint: { x: 150, y: 100 } }],
    'ಖ': [{ id: 1, points: [{ x: 100, y: 100 }, { x: 100, y: 200 }, { x: 150, y: 200 }, { x: 150, y: 100 }], startPoint: { x: 100, y: 100 } }, { id: 2, points: [{ x: 150, y: 200 }, { x: 150, y: 250 }], startPoint: { x: 150, y: 200 } }],
    'ಗ': [{ id: 1, points: [{ x: 100, y: 200 }, { x: 100, y: 150 }, { x: 150, y: 150 }, { x: 150, y: 200 }], startPoint: { x: 100, y: 200 } }, { id: 2, points: [{ x: 150, y: 150 }, { x: 150, y: 100 }, { x: 200, y: 100 }], startPoint: { x: 150, y: 150 } }],
    'ಘ': [{ id: 1, points: [{ x: 100, y: 100 }, { x: 100, y: 200 }, { x: 200, y: 200 }, { x: 200, y: 100 }], startPoint: { x: 100, y: 100 } }, { id: 2, points: [{ x: 150, y: 200 }, { x: 150, y: 250 }], startPoint: { x: 150, y: 200 } }, { id: 3, points: [{ x: 100, y: 100 }, { x: 200, y: 100 }], startPoint: { x: 100, y: 100 } }],
    'ಙ': [{ id: 1, points: [{ x: 150, y: 150 }, { x: 140, y: 130 }, { x: 120, y: 120 }, { x: 100, y: 130 }, { x: 90, y: 150 }, { x: 100, y: 170 }, { x: 120, y: 180 }, { x: 140, y: 170 }, { x: 150, y: 150 }], startPoint: { x: 150, y: 150 } }, { id: 2, points: [{ x: 150, y: 150 }, { x: 200, y: 150 }, { x: 200, y: 100 }, { x: 250, y: 100 }], startPoint: { x: 150, y: 150 } }],
    'ಚ': [{ id: 1, points: [{ x: 100, y: 150 }, { x: 200, y: 150 }, { x: 200, y: 100 }], startPoint: { x: 100, y: 150 } }, { id: 2, points: [{ x: 150, y: 100 }, { x: 250, y: 100 }], startPoint: { x: 150, y: 100 } }],
    'ಛ': [{ id: 1, points: [{ x: 100, y: 100 }, { x: 100, y: 200 }, { x: 200, y: 200 }, { x: 200, y: 100 }], startPoint: { x: 100, y: 100 } }, { id: 2, points: [{ x: 150, y: 200 }, { x: 150, y: 300 }], startPoint: { x: 150, y: 200 } }],
    'ಜ': [{ id: 1, points: [{ x: 100, y: 100 }, { x: 100, y: 200 }, { x: 150, y: 200 }, { x: 150, y: 150 }, { x: 200, y: 150 }, { x: 200, y: 100 }], startPoint: { x: 100, y: 100 } }, { id: 2, points: [{ x: 150, y: 100 }, { x: 250, y: 100 }], startPoint: { x: 150, y: 100 } }],
    'ಝ': [{ id: 1, points: [{ x: 100, y: 100 }, { x: 150, y: 150 }, { x: 100, y: 200 }, { x: 150, y: 250 }, { x: 200, y: 200 }, { x: 200, y: 100 }], startPoint: { x: 100, y: 100 } }, { id: 2, points: [{ x: 150, y: 100 }, { x: 250, y: 100 }], startPoint: { x: 150, y: 100 } }],
    'ಞ': [{ id: 1, points: [{ x: 100, y: 150 }, { x: 120, y: 120 }, { x: 150, y: 150 }, { x: 180, y: 120 }, { x: 200, y: 150 }], startPoint: { x: 100, y: 150 } }, { id: 2, points: [{ x: 200, y: 150 }, { x: 200, y: 100 }, { x: 250, y: 100 }], startPoint: { x: 200, y: 150 } }],
    'ಟ': [{ id: 1, points: [{ x: 100, y: 100 }, { x: 100, y: 200 }, { x: 200, y: 200 }], startPoint: { x: 100, y: 100 } }, { id: 2, points: [{ x: 100, y: 100 }, { x: 200, y: 100 }], startPoint: { x: 100, y: 100 } }],
    'ಠ': [{ id: 1, points: [{ x: 150, y: 100 }, { x: 100, y: 150 }, { x: 150, y: 200 }, { x: 200, y: 150 }, { x: 150, y: 100 }], startPoint: { x: 150, y: 100 } }],
    'ಡ': [{ id: 1, points: [{ x: 100, y: 100 }, { x: 150, y: 100 }, { x: 150, y: 200 }, { x: 100, y: 200 }], startPoint: { x: 100, y: 100 } }],
    'ಢ': [{ id: 1, points: [{ x: 100, y: 100 }, { x: 150, y: 100 }, { x: 150, y: 200 }, { x: 100, y: 200 }], startPoint: { x: 100, y: 100 } }, { id: 2, points: [{ x: 125, y: 200 }, { x: 125, y: 250 }], startPoint: { x: 125, y: 200 } }],
    'ಣ': [{ id: 1, points: [{ x: 100, y: 200 }, { x: 100, y: 100 }, { x: 150, y: 100 }, { x: 150, y: 150 }, { x: 200, y: 150 }, { x: 200, y: 100 }, { x: 250, y: 100 }], startPoint: { x: 100, y: 200 } }],
    'ತ': [{ id: 1, points: [{ x: 100, y: 200 }, { x: 100, y: 150 }, { x: 150, y: 100 }, { x: 200, y: 150 }, { x: 200, y: 200 }], startPoint: { x: 100, y: 200 } }, { id: 2, points: [{ x: 150, y: 100 }, { x: 250, y: 100 }], startPoint: { x: 150, y: 100 } }],
    'ಥ': [{ id: 1, points: [{ x: 100, y: 150 }, { x: 150, y: 100 }, { x: 200, y: 150 }, { x: 150, y: 200 }, { x: 100, y: 150 }], startPoint: { x: 100, y: 150 } }, { id: 2, points: [{ x: 150, y: 100 }, { x: 250, y: 100 }], startPoint: { x: 150, y: 100 } }],
    'ದ': [{ id: 1, points: [{ x: 100, y: 100 }, { x: 150, y: 100 }, { x: 150, y: 200 }, { x: 100, y: 200 }, { x: 100, y: 150 }], startPoint: { x: 100, y: 100 } }],
    'ಧ': [{ id: 1, points: [{ x: 100, y: 100 }, { x: 150, y: 100 }, { x: 150, y: 200 }, { x: 100, y: 200 }, { x: 100, y: 150 }], startPoint: { x: 100, y: 100 } }, { id: 2, points: [{ x: 125, y: 200 }, { x: 125, y: 250 }], startPoint: { x: 125, y: 200 } }],
    'ನ': [{ id: 1, points: [{ x: 100, y: 150 }, { x: 120, y: 120 }, { x: 140, y: 150 }, { x: 160, y: 120 }, { x: 180, y: 150 }], startPoint: { x: 100, y: 150 } }, { id: 2, points: [{ x: 180, y: 150 }, { x: 200, y: 150 }, { x: 200, y: 100 }], startPoint: { x: 180, y: 150 } }, { id: 3, points: [{ x: 150, y: 100 }, { x: 250, y: 100 }], startPoint: { x: 150, y: 100 } }],
    'ಪ': [{ id: 1, points: [{ x: 100, y: 100 }, { x: 100, y: 200 }, { x: 150, y: 200 }, { x: 150, y: 100 }], startPoint: { x: 100, y: 100 } }, { id: 2, points: [{ x: 150, y: 100 }, { x: 200, y: 100 }, { x: 200, y: 50 }], startPoint: { x: 150, y: 100 } }],
    'ಫ': [{ id: 1, points: [{ x: 100, y: 100 }, { x: 100, y: 200 }, { x: 150, y: 200 }, { x: 150, y: 100 }], startPoint: { x: 100, y: 100 } }, { id: 2, points: [{ x: 150, y: 100 }, { x: 200, y: 100 }, { x: 200, y: 50 }], startPoint: { x: 150, y: 100 } }, { id: 3, points: [{ x: 125, y: 200 }, { x: 125, y: 250 }], startPoint: { x: 125, y: 200 } }],
    'ಬ': [{ id: 1, points: [{ x: 100, y: 100 }, { x: 100, y: 200 }, { x: 150, y: 200 }, { x: 150, y: 150 }, { x: 100, y: 150 }], startPoint: { x: 100, y: 100 } }, { id: 2, points: [{ x: 150, y: 100 }, { x: 200, y: 100 }], startPoint: { x: 150, y: 100 } }],
    'ಭ': [{ id: 1, points: [{ x: 100, y: 100 }, { x: 100, y: 200 }, { x: 150, y: 200 }, { x: 150, y: 150 }, { x: 100, y: 150 }], startPoint: { x: 100, y: 100 } }, { id: 2, points: [{ x: 150, y: 100 }, { x: 200, y: 100 }], startPoint: { x: 150, y: 100 } }, { id: 3, points: [{ x: 125, y: 200 }, { x: 125, y: 250 }], startPoint: { x: 125, y: 200 } }],
    'ಮ': [{ id: 1, points: [{ x: 100, y: 200 }, { x: 100, y: 100 }, { x: 150, y: 100 }, { x: 150, y: 200 }, { x: 150, y: 200 }, { x: 200, y: 200 }, { x: 200, y: 100 }], startPoint: { x: 100, y: 200 } }, { id: 2, points: [{ x: 150, y: 100 }, { x: 250, y: 100 }], startPoint: { x: 150, y: 100 } }],
    'ಯ': [{ id: 1, points: [{ x: 100, y: 200 }, { x: 150, y: 200 }, { x: 200, y: 150 }, { x: 200, y: 100 }], startPoint: { x: 100, y: 200 } }, { id: 2, points: [{ x: 150, y: 100 }, { x: 250, y: 100 }], startPoint: { x: 150, y: 100 } }],
    'ರ': [{ id: 1, points: [{ x: 150, y: 80 }, { x: 120, y: 90 }, { x: 90, y: 120 }, { x: 80, y: 150 }, { x: 90, y: 180 }, { x: 120, y: 210 }, { x: 150, y: 220 }, { x: 180, y: 210 }, { x: 210, y: 180 }, { x: 220, y: 150 }, { x: 210, y: 120 }, { x: 180, y: 90 }, { x: 150, y: 80 }], startPoint: { x: 150, y: 80 } }, { id: 2, points: [{ x: 150, y: 80 }, { x: 250, y: 80 }], startPoint: { x: 150, y: 80 } }],
    'ಲ': [{ id: 1, points: [{ x: 100, y: 150 }, { x: 125, y: 100 }, { x: 150, y: 150 }, { x: 175, y: 100 }, { x: 200, y: 150 }, { x: 200, y: 200 }], startPoint: { x: 100, y: 150 } }, { id: 2, points: [{ x: 150, y: 100 }, { x: 250, y: 100 }], startPoint: { x: 150, y: 100 } }],
    'ವ': [{ id: 1, points: [{ x: 150, y: 100 }, { x: 100, y: 100 }, { x: 100, y: 200 }, { x: 150, y: 200 }], startPoint: { x: 150, y: 100 } }, { id: 2, points: [{ x: 150, y: 100 }, { x: 200, y: 100 }, { x: 200, y: 50 }], startPoint: { x: 150, y: 100 } }],
    'ಶ': [{ id: 1, points: [{ x: 150, y: 200 }, { x: 150, y: 150 }, { x: 120, y: 120 }, { x: 150, y: 100 }, { x: 180, y: 120 }, { x: 150, y: 150 }, { x: 200, y: 150 }, { x: 200, y: 100 }], startPoint: { x: 150, y: 200 } }, { id: 2, points: [{ x: 150, y: 100 }, { x: 250, y: 100 }], startPoint: { x: 150, y: 100 } }],
    'ಷ': [{ id: 1, points: [{ x: 100, y: 100 }, { x: 100, y: 200 }, { x: 150, y: 200 }, { x: 150, y: 100 }], startPoint: { x: 100, y: 100 } }, { id: 2, points: [{ x: 100, y: 150 }, { x: 150, y: 150 }], startPoint: { x: 100, y: 150 } }, { id: 3, points: [{ x: 150, y: 100 }, { x: 200, y: 100 }, { x: 200, y: 50 }], startPoint: { x: 150, y: 100 } }],
    'ಸ': [{ id: 1, points: [{ x: 100, y: 100 }, { x: 100, y: 150 }, { x: 150, y: 150 }, { x: 100, y: 200 }], startPoint: { x: 100, y: 100 } }, { id: 2, points: [{ x: 150, y: 100 }, { x: 200, y: 100 }, { x: 200, y: 50 }], startPoint: { x: 150, y: 100 } }],
    'ಹ': [{ id: 1, points: [{ x: 100, y: 100 }, { x: 150, y: 100 }, { x: 150, y: 150 }, { x: 100, y: 150 }, { x: 100, y: 200 }, { x: 150, y: 200 }], startPoint: { x: 100, y: 100 } }, { id: 2, points: [{ x: 150, y: 100 }, { x: 250, y: 100 }], startPoint: { x: 150, y: 100 } }],
    'ಳ': [{ id: 1, points: [{ x: 100, y: 100 }, { x: 100, y: 200 }, { x: 150, y: 200 }, { x: 150, y: 100 }, { x: 200, y: 100 }, { x: 200, y: 200 }], startPoint: { x: 100, y: 100 } }, { id: 2, points: [{ x: 150, y: 100 }, { x: 250, y: 100 }], startPoint: { x: 150, y: 100 } }],
    'ಅ': [
        { id: 1, points: [{ x: 100, y: 100 }, { x: 90, y: 110 }, { x: 80, y: 130 }, { x: 75, y: 150 }, { x: 80, y: 170 }, { x: 90, y: 185 }, { x: 110, y: 190 }, { x: 130, y: 185 }, { x: 145, y: 170 }, { x: 150, y: 150 }, { x: 145, y: 130 }, { x: 130, y: 115 }, { x: 115, y: 110 }], startPoint: { x: 100, y: 100 } },
        { id: 2, points: [{ x: 150, y: 140 }, { x: 180, y: 140 }, { x: 210, y: 140 }, { x: 210, y: 120 }, { x: 210, y: 100 }], startPoint: { x: 150, y: 140 } },
        { id: 3, points: [{ x: 150, y: 100 }, { x: 250, y: 100 }], startPoint: { x: 150, y: 100 } }
    ],
    'ಆ': [
        { id: 1, points: [{ x: 100, y: 100 }, { x: 90, y: 110 }, { x: 80, y: 130 }, { x: 75, y: 150 }, { x: 80, y: 170 }, { x: 90, y: 185 }, { x: 110, y: 190 }, { x: 130, y: 185 }, { x: 145, y: 170 }, { x: 150, y: 150 }, { x: 145, y: 130 }, { x: 130, y: 115 }, { x: 115, y: 110 }], startPoint: { x: 100, y: 100 } },
        { id: 2, points: [{ x: 150, y: 140 }, { x: 210, y: 140 }, { x: 210, y: 100 }], startPoint: { x: 150, y: 140 } },
        { id: 3, points: [{ x: 150, y: 100 }, { x: 250, y: 100 }], startPoint: { x: 150, y: 100 } },
        { id: 4, points: [{ x: 250, y: 100 }, { x: 250, y: 300 }], startPoint: { x: 250, y: 100 } }
    ],
    'ಇ': [
        { id: 1, points: [{ x: 80, y: 200 }, { x: 90, y: 170 }, { x: 110, y: 150 }, { x: 130, y: 150 }, { x: 150, y: 170 }, { x: 160, y: 190 }, { x: 170, y: 170 }, { x: 190, y: 150 }, { x: 210, y: 150 }, { x: 230, y: 180 }, { x: 230, y: 210 }], startPoint: { x: 80, y: 200 } }
    ],
    'ಈ': [
        { id: 1, points: [{ x: 100, y: 100 }, { x: 100, y: 250 }], startPoint: { x: 100, y: 100 } },
        { id: 2, points: [{ x: 100, y: 175 }, { x: 200, y: 175 }], startPoint: { x: 100, y: 175 } },
        { id: 3, points: [{ x: 200, y: 100 }, { x: 200, y: 250 }], startPoint: { x: 200, y: 100 } },
        { id: 4, points: [{ x: 100, y: 100 }, { x: 200, y: 100 }], startPoint: { x: 100, y: 100 } }
    ],
    'ಉ': [
        { id: 1, points: [{ x: 80, y: 100 }, { x: 100, y: 100 }, { x: 100, y: 200 }, { x: 150, y: 200 }], startPoint: { x: 80, y: 100 } }
    ],
    'ಊ': [
        { id: 1, points: [{ x: 80, y: 100 }, { x: 150, y: 100 }, { x: 150, y: 200 }, { x: 200, y: 200 }, { x: 200, y: 250 }], startPoint: { x: 80, y: 100 } }
    ],
    'ಋ': [
        { id: 1, points: [{ x: 100, y: 250 }, { x: 100, y: 100 }, { x: 150, y: 100 }, { x: 120, y: 150 }, { x: 180, y: 150 }], startPoint: { x: 100, y: 250 } }
    ],
    'ಎ': [
        { id: 1, points: [{ x: 150, y: 250 }, { x: 100, y: 200 }, { x: 150, y: 150 }, { x: 200, y: 150 }], startPoint: { x: 150, y: 250 } }
    ],
    'ಏ': [
        { id: 1, points: [{ x: 150, y: 250 }, { x: 100, y: 200 }, { x: 150, y: 150 }, { x: 200, y: 150 }, { x: 250, y: 100 }], startPoint: { x: 150, y: 250 } }
    ],
    'ಐ': [
        { id: 1, points: [{ x: 100, y: 250 }, { x: 150, y: 200 }, { x: 100, y: 150 }, { x: 150, y: 100 }, { x: 200, y: 100 }], startPoint: { x: 100, y: 250 } }
    ],
    'ಒ': [
        { id: 1, points: [{ x: 150, y: 250 }, { x: 100, y: 200 }, { x: 150, y: 150 }, { x: 150, y: 100 }], startPoint: { x: 150, y: 250 } }
    ],
    'ಓ': [
        { id: 1, points: [{ x: 150, y: 250 }, { x: 100, y: 200 }, { x: 150, y: 150 }, { x: 150, y: 100 }, { x: 200, y: 100 }], startPoint: { x: 150, y: 250 } }
    ],
    'ಔ': [
        { id: 1, points: [{ x: 150, y: 250 }, { x: 100, y: 200 }, { x: 150, y: 150 }, { x: 150, y: 100 }, { x: 200, y: 50 }], startPoint: { x: 150, y: 250 } }
    ],
    'ಅಂ': [ // AMM - Anusvara
        {
            id: 1,
            points: [
                { x: 100, y: 100 },
                { x: 200, y: 200 },
            ],
            startPoint: { x: 100, y: 100 },
        },
    ],
    'ಅಃ': [ // AHA - Visarga
        {
            id: 1,
            points: [
                { x: 100, y: 100 },
                { x: 200, y: 200 },
            ],
            startPoint: { x: 100, y: 100 },
        },
    ],
};

// Helper function to get strokes for a letter
export const getLetterStrokes = (letter: string): Stroke[] => {
    return letterStrokePaths[letter.toUpperCase()] || [];
};
