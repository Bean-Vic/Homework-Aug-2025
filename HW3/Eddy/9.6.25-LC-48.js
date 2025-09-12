/* You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.*/
function rotate(matrix) {
    let n = matrix.length
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let tmp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = tmp
        }
    }
    for (let i = 0; i < n; i++) {
        matrix[i].reverse()
    }
}
