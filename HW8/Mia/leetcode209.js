/**209
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0,
    total = 0;
  let result = Infinity;
  for (let right = 0; right < nums.length; right++) {
    total += nums[right];
    while (total >= target) {
      result = Math.min(right - left + 1, result);
      total -= nums[left];
      left += 1;
    }
  }

  return result === Infinity ? 0 : result;
};
