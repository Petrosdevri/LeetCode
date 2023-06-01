/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    let res = [];
    const flatten = (nums, leng) => {
        for(const num of nums) {
            if(Array.isArray(num) && leng > 0) {
                flatten(num, leng-1);
            } else {
                res.push(num);
            }
        }
    }

    flatten(arr, n);
    return res;
};