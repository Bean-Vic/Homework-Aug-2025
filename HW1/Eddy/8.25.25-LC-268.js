/* Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 */

function missingNumber(nums) {
    let n = nums.length
    let sum = n * (n + 1) / 2
    let cur = 0
    for (let x of nums) cur += x
    return sum - cur
}
