/* Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.*/
function maxProduct(nums) {
    let res = nums[0]
    let maxp = nums[0], minp = nums[0]
    for (let i = 1; i < nums.length; i++) {
        let x = nums[i]
        if (x < 0) { let t = maxp; maxp = minp; minp = t }
        maxp = Math.max(x, maxp * x)
        minp = Math.min(x, minp * x)
        if (maxp > res) res = maxp
    }
    return res
}
