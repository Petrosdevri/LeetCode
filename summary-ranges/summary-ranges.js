/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let summary = [];
    let newRange = true;

    for(let i=0; i<nums.length; i++) {
        if(newRange) {
            PointA = nums[i];
            newRange = false;
        } if(nums[i+1] != nums[i]+1) {
            newRange = true;
            if(PointA != nums[i]) {
                summary.push(`${PointA}->${nums[i]}`);
            } else {
                summary.push(`${nums[i]}`);
            }
        } 
    }

    return summary;
};