/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    if(target < nums[start]) {
        return 0;
    } else if(target > nums[end]) {
        return end+1;
    }

    while(start <= end) {
        let mid = Math.floor((start + end) /2);
        if(target < nums[mid]) {
            end = mid-1;
        } else if(target > nums[mid]) {
            start = mid+1;
        } else {
            return mid;
        }
    }
    return start;
};