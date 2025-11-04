/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = nums[0], max_pro = nums[0], min_pro = nums[0];
    for (const i of nums.slice(1)) {
        if (i < 0) {
            temp_val = max_pro
            max_pro = min_pro;
            min_pro = temp_val;
        }
        max_pro = Math.max(max_pro*i, i);
        min_pro = Math.min(min_pro*i, i);
        res = Math.max(max_pro, res)
    }

    return res

};