/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * Time Complexity: O(n) 
 *   - We iterate through the array once, and each Set lookup/insertion is O(1) on average.
 *
 * Space Complexity: O(n) 
 *   - In the worst case, if all elements are unique, the Set will store all n elements.
 */
var containsDuplicate = function(nums) {
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
};
