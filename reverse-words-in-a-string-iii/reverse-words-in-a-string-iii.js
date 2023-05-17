/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map((word) => {
        const reverseString = str => {
            let newStr = '';
            for(let i=str.length-1; i>=0; i--) {
                newStr += str[i];
            }
            return newStr;
        }
        word = reverseString(word);
        return word;
    }).join(' '); 
};