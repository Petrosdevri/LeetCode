/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const seen = new Map();
    let start = 0;
    let maxLen = 0;
    
    for(let i = 0; i < s.length; i++) {
        // if the current char was seen, move the start to (1 + the last index of this char)
        // max prevents moving backward, 'start' can only move forward
        if(seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)
        seen.set(s[i], i);
        // maximum of the current substring length and maxLen
        maxLen = Math.max(i - start + 1, maxLen);
    } 
    
    return maxLen; 
};