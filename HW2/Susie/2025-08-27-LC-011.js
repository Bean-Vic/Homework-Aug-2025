/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // find first 2 nums, their spacing, use the shorter digit times the spacing
  let left = 0;
  let right = height.length - 1;
  let maxA = 0;

  while (left < right) {
    let edge = Math.min(height[left], height[right]);
    let area = edge * (right - left);
    
    maxA = Math.max(maxA, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxA;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
