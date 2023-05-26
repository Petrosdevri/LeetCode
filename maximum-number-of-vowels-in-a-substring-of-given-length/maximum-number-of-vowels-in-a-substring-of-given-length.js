/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let count = 0;
    let maxNum = 0;
    const vowels = ['a',"e", "i", "o", "u"];

    for(let i=0; i<s.length; i++) {
        if(vowels.includes(s[i])) {
            count++;
        }
        if(i>=k && vowels.includes(s[i-k])) {
            count--;
        }
        if(count  > maxNum) {
            maxNum = count;
        }
    }

    return maxNum;
};