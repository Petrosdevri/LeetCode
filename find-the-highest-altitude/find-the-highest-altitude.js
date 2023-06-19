/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let maxCount = 0;
    let currentCount = 0;
    
    for(let altitude of gain) {
        currentCount += altitude;
        if(currentCount > maxCount) {
            maxCount = currentCount;
        }
    }

    return maxCount;
};