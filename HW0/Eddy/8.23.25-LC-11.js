/* You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

 */

function maxArea(height) {
    let l = 0, r = height.length - 1, res = 0
    while (l < r) {
        let h = Math.min(height[l], height[r])
        let area = h * (r - l)
        if (area > res) res = area
        if (height[l] < height[r]) l++
        else r--
    }
    return res
}
