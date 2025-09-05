/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let zeros = 0, l = 0, best = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeros++;
        }
        while (zeros > 1) {
            if (nums[l] === 0) {
                zeros--;
            }
            l++;
        }
        best = Math.max(best, (i-l));

    }

    return best;
};