/**
 * Randomise a number in specified range, inclusive of the provided range
 * @param min random minimum (included)
 * @param max random maximum (included)
 * @returns random number
 */
export function randomIntFromInterval(min: number, max: number) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}