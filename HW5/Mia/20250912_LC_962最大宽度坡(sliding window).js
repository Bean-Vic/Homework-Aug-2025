/**962. 最大宽度坡
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
  //smallest value is 0
  let maxright = Array(nums.length).fill(0);
  console.log(maxright);
  prevMax = 0;
  for (let i = nums.length - 1; i > 0; i--) {
    maxright[i] = Math.max(nums[i], prevMax);
    prevMax = maxright[i];
  }
  let maxWidth = 0;
  let left = 0,
    right = 0;
  // 使用双指针寻找最大坡
  while (right < nums.length) {
    while (left < right && nums[left] > maxright[right]) {
      left++;
    }
    maxWidth = Math.max(maxWidth, right - left);
    right++;
  }
  return maxWidth;
};
