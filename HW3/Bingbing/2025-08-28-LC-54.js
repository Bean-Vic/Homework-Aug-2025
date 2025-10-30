/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let ans = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // left -> right
        for (let c = left; c <= right; c++) {
            ans.push(matrix[top][c]);
        }
        top++;

        // top -> bottom
        for (let r = top; r <= bottom; r++) {
            ans.push(matrix[r][right]);
        }
        right--;

        // right -> left
        if (top <= bottom) {
            for (let c = right; c >= left; c--) {
                ans.push(matrix[bottom][c]);
            }
            bottom--;
        }

        // bottom -> top
        if (left <= right) {
            for (let r = bottom; r >= top; r--) {
                ans.push(matrix[r][left]);
            }
            left++;
        }
    }

    return ans;
};
