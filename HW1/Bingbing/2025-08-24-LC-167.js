/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var twoSum = function(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
        const sum = numbers[l] + numbers[r];
        if (sum === target) {
            return [l + 1, r + 1]; 
        } else if (sum > target) {
            r--;
        } else {
            l++;
        }
    }

    return []
};
