/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max_jump = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > max_jump) {
            return false
        }
        max_jump = Math.max(max_jump, i+nums[i]);

        if (max_jump >= nums.length-1) {
            return true
        }
    }
};