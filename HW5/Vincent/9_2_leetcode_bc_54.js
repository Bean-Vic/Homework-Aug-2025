/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const r = matrix.length;
    const c = matrix[0].length;

    let top = 0, bottom = r-1;
    let left = 0, right = c-1;
    let output = [];

    while (top<= bottom && left <= right) {
        for (let j = left; j < right+1; j++) {
            output.push(matrix[top][j]);
        }
        top++;
        for (let i = top; i < bottom+1; i++) {
            output.push(matrix[i][right]);
        }
        right--;
        if (top<=bottom) {
            for (let j = right; j > left-1; j--){
                output.push(matrix[bottom][j]);
            }
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i > top-1; i--){
                output.push(matrix[i][left]);
            }
            left++;
        }
    }
    return output
};