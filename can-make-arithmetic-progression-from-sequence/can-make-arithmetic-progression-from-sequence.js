/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr = arr.sort((a, b) => a - b);
    let diff = arr[1] - arr[0];  
    for(let i=2; i<arr.length; i++) {
        if(diff != arr[i]-arr[i-1]) return false;
    }
    return true;
};