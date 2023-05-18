/**
 * @param {number[]} nums
 * @return {number}
 */

const signFunc = (x) => {
    if(x > 0) {
        return 1;
    } else if(x === 0) {
        return 0;
    } else {
        return -1;
    }
}

var arraySign = function(nums) {
    let product = 0;
    for(let i=0; i<nums.length; i++) {
        if(i === 0) {
            product = nums[i]
        } else if(nums[i] === 0) {
            return 0;
        } else {
            product *= nums[i];
        }
    }
    
    return signFunc(product);
};