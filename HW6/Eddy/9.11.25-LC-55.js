/* You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 */
function canJump(nums) {
    let far = 0
    for (let i = 0; i < nums.length; i++) {
        if (i > far) return false
        far = Math.max(far, i + nums[i])
        if (far >= nums.length - 1) return true
    }
    return true
}
