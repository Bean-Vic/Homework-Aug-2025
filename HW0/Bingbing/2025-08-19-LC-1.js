/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}  // indices of the two numbers
 *
 * Time Complexity: O(n)
 *   - Single pass through the array; each Map lookup/insertion is O(1) on average.
 *
 * Space Complexity: O(n)
 *   - In the worst case we store all previous elements in the Map.
 */
var twoSum = function(nums, target) {
  const idx = new Map(); 

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (idx.has(need)) return [idx.get(need), i]; 
    idx.set(nums[i], i);                          
  }
  return []; 
};
