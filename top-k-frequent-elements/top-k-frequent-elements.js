/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let result = [];
    let numbers = {};

    for(let i=0; i<nums.length; i++) {
        if(numbers[nums[i]]) {
            numbers[nums[i]]++;
        } else {
            numbers[nums[i]] = 1;
        }
    }

    let arr = Object.entries(numbers).sort((a, b) => {
        return a[1] - b[1]
    });

    while(result.length != k) {
        let curr = arr.pop();
        result.push(curr[0]);
    }

    return result;
};