/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0, r = nums.length - 1;

    while (l < r) {
        let m = Math.floor((r+l)/2);
        if (nums[m] > nums[r]) {
            l = m + 1;
        } else {
            r = m;
        }
    }

    return nums[l];

    const half_point = Math.floor(n/2);
    return Math.min(findMin(nums.slice(0, half_point)), findMin(nums.slice(half_point)))



};