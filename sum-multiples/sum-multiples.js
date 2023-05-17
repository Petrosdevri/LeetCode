/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let sum = 0;
    let i = 1;
    while(i <= n) {
        if(i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            sum += i;
        }
        i++;
    }
    return sum;
};