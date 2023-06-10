/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
    if(n == 1) return maxSum;
    const left = index;
    const right = n-index-1;
    const sumSide = (x, count) => {
        if(x > count) {
            return (2*x-count-1)*count/2;
        } else {
            return (x-1)*x/2+count-x+1;
        }
    }
    let valueLeft = 0;
    let valueRight = maxSum;
    while(valueRight-valueLeft > 1) {
        const mid = Math.floor((valueLeft+valueRight)/2);
        if(sumSide(mid, left) + sumSide(mid, right) + mid <= maxSum) valueLeft = mid;
        else valueRight = mid; 
    }

    return valueLeft;
};