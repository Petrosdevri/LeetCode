/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxConsecutive = 0;
    let first=0;
    let current = 0;
    while(first < nums.length) {
        if(nums[first] === 1) {
            current++;
            if(current > maxConsecutive) {
                maxConsecutive = current;
            }
        } else {
            current = 0;
        }
        first++;
    }
    return maxConsecutive;
};