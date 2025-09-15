/**
 * @param {number[]} nums  // sorted non-decreasing
 * @return {number}        // length k of the de-duplicated prefix
 *
 * Time: O(n), Space: O(1)
 */
var removeDuplicates = function(nums) {
  const n = nums.length;
  if (n === 0) return 0;

  let k = 1; // next write index; nums[0] 保留
  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};


