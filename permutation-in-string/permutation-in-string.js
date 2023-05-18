/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    const targetMap = new Map();

    for (const letter of s1) {
        const exist = targetMap.get(letter);
        if (exist) {
        targetMap.set(letter, exist + 1);
        } else {
        targetMap.set(letter, 1);
        }
    }

    for (let windowHead = 0; windowHead <= s2.length - s1.length; windowHead++) {
        const trackMap = new Map();
        for (let testHead = 0; testHead < s1.length; testHead++) {
        const letterTest = s2[windowHead + testHead];
        const exist = targetMap.get(letterTest);
        if (exist) {
            trackMap.set(
            letterTest,
            trackMap.get(letterTest) ? trackMap.get(letterTest) + 1 : 1
            );

            if (trackMap.get(letterTest) > exist) {
            break;
            }

            if (testHead + 1 === s1.length) {
            return true;
            }
        } else {
            break;
        }
        }
    }
    return false;
};