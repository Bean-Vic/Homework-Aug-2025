/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

*/

function threeSum(nums) {
    nums.sort((a, b) => a - b)
    let n = nums.length, res = []
    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let l = i + 1, r = n - 1
        while (l < r) {
            let s = nums[i] + nums[l] + nums[r]
            if (s === 0) {
                res.push([nums[i], nums[l], nums[r]])
                l++; r--
                while (l < r && nums[l] === nums[l - 1]) l++
                while (l < r && nums[r] === nums[r + 1]) r--
            } else if (s < 0) {
                l++
            } else {
                r--
            }
        }
    }
    return res
}
