/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let num1 = new Set(nums1);
    let num2 = new Set(nums2);

    num1.forEach(value => {
        if(num2.has(value)) {
            num1.delete(value);
            num2.delete(value);
        }
    })

    return [Array.from(num1), Array.from(num2)]; 
};