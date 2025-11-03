/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curr = nums[0], ans = nums[0];

    for (let item of nums.slice(1)) {
        curr = Math.max(curr+item, item);
        ans = Math.max(ans, curr)
    }

    return ans
};