/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 * Idea:
 *  1) Sort the array.
 *  2) Fix index i, then use two pointers (l, r) on the right side to find pairs
 *     that sum to -nums[i].
 *  3) Skip duplicates for i; after each hit, skip duplicates on l and r.
 *
 * Time Complexity:  O(n^2)   (outer loop O(n) * inner two-pointer sweep O(n))
 * Space Complexity: O(1)     (ignoring the output list)
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);       // sort non-decreasing
  const res = [];
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;   // skip duplicate i
    if (nums[i] > 0) break;                            // early stop: remaining are >= nums[i] > 0

    let l = i + 1, r = n - 1;
    const target = -nums[i];

    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum === target) {
        res.push([nums[i], nums[l], nums[r]]);
        l++; r--;                                      // shrink both sides
        while (l < r && nums[l] === nums[l - 1]) l++;  // skip dup on left
        while (l < r && nums[r] === nums[r + 1]) r--;  // skip dup on right
      } else if (sum < target) {
        l++;                                           // need a larger sum
      } else {
        r--;                                           // need a smaller sum
      }
    }
  }
  return res;
};


