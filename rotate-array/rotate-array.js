/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
    for(let i=nums.length-1; i>=0; i--) {
        nums[i+k] = nums[i]
    } 

    for(let i=k-1; i>=0; i--) {
        nums[i] = nums.pop();
    }
    return nums;
};

/* for(let i=nums.length-1; i>k; i--) {
        nums.unshift(nums.pop());
    }
    return nums;
    let start = 0;
    let end = nums.length-1;
    for(let i=0; i<=k; i++) {
        for(let j=i+1; j<nums.length; j++) {
            let tmp = nums[start];
            nums[start] = nums[end];
            nums[j+1] = tmp;
        }
    }
    return nums;
*/