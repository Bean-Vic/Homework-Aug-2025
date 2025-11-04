/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sorted_nums = nums.sort((a,b) => a - b );
    const length = sorted_nums.length;
    const output_val = new Array();

    for (let i = 0; i < length-2; i++) {
        if (i > 0 && sorted_nums[i] == sorted_nums[i-1]){
            continue;
        }

        let left = i + 1, right = length - 1;

        while (left < right) {
            let sum = sorted_nums[i] + sorted_nums[left] + sorted_nums[right]
            if (sum == 0) {
                output_val.push(Array(sorted_nums[i], sorted_nums[left], sorted_nums[right]))
                left += 1;
                right -= 1;

                while (left < right && sorted_nums[left] == sorted_nums[left-1]) {
                    left +=1;
                }
                while (left < right && sorted_nums[right] == sorted_nums[right+1]) {
                    right -=1;
                }
            } else if (sum > 0) {
                right -= 1;
            } else {
                left += 1;
            }
        }
    }

    return output_val
};