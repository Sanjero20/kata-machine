// Given two crystal balls that will break if dropped from high enough
// distance, determine the exact spot in which it will break in the most
// optimized way.

export default function two_crystal_balls(breaks: boolean[]): number {
    const steps = Math.floor(Math.sqrt(breaks.length));
    let prev = 0;

    for (let i = 0; i <= breaks.length; i += steps) {
        if (breaks[i] == true) {
            break;
        }

        prev = i;
    }

    // Linear search
    for (let j = prev; j <= breaks.length; j++) {
        if (breaks[j] == true) {
            return j;
        }
    }

    return -1;
}
