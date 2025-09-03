/**
 * @param {number[]} height
 * @return {number}
 *
 * Idea:
 *   Two pointers at both ends. Area = (right - left) * min(h[left], h[right]).
 *   Always move the pointer at the shorter line inward.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var maxArea = function(height) {
  let left = 0, right = height.length - 1;
  let ans = 0;

  while (left < right) {
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    ans = Math.max(ans, width * h);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};
