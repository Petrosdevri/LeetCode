function largestAltitude(gain: number[]): number {
    let maxCount: number = 0;
    let currentCount: number = 0;

    for(let altitude of gain) {
        currentCount += altitude;
        if(currentCount > maxCount) maxCount = currentCount;
    }

    return maxCount;
};