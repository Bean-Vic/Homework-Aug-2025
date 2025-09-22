/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const existed_values = new Set(nums);
    if (existed_values.size !== nums.length) return true;
    return false;
};