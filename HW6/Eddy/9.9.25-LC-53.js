/* Given an integer array nums, find the subarray with the largest sum, and return its sum. */
function maxSubArray(nums) {
    let cur = nums[0], res = nums[0]
    for (let i = 1; i < nums.length; i++) {
        cur = Math.max(nums[i], cur + nums[i])
        if (cur > res) res = cur
    }
    return res
}
