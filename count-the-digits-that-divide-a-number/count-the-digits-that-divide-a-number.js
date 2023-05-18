/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let numStr = num.toString();
    let count = 0;
    for(let i=0; i<numStr.length; i++) {
        if(num % numStr[i] === 0) {
            count++;
        }
    }
    return count;
};