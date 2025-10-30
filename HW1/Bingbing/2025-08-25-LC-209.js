/**
 * Time Complexity: O(n) — each element is added and removed at most once
 * Space Complexity: O(1)
 */
var minSubArrayLen = function(target, nums) {
  const n = nums.length;
  let ans = n + 1;
  let l = 0;
  let sum = 0;

  for (let r = 0; r < n; r++) {
    sum += nums[r];
    while (sum >= target) {
      const len = r - l + 1;
      if (len < ans) {
        ans = len;
        if (ans === 1) return 1;
      }
      sum -= nums[l++];
    }
  }
  return ans === n + 1 ? 0 : ans;
};
