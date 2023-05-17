/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num === NaN || num === 0) {
        return 0;
    } else if(num < 10) {
        return num;
    } else {
        return num % 9 === 0 ? 9 : num % 9; 
    }
}