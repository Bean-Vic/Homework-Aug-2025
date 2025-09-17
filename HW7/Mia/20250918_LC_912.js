/** O(n) n is the number of nums
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function (nums, lower, upper) {
  let n = nums.length;
  let missrange = [];
  if (n === 0) return [[lower, upper]];
  if (lower < nums[0]) {
    missrange.push([lower, nums[0] - 1]);
  }
  for (i = 1; i < n; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      missrange.push([nums[i - 1] + 1, nums[i] - 1]);
    }
  }
  if (upper > nums[n - 1]) {
    missrange.push([nums[n - 1] + 1, upper]);
  }
  return missrange;
};
