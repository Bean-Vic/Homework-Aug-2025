/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let max_area = 0;

    while (left < right) {
        let diff_x = right - left;
        if (height[left] < height[right]) {
            let temp_area = diff_x * height[left]
            max_area = Math.max(temp_area, max_area);
            left += 1;
        } else {
            let temp_area = diff_x * height[right]
            max_area = Math.max(temp_area, max_area);
            right -= 1;
        }
    }

    return max_area;
};