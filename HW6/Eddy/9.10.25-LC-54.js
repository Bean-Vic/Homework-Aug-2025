/* Given an m x n matrix, return all elements of the matrix in spiral order. */
function spiralOrder(matrix) {
    let m = matrix.length, n = matrix[0].length
    let top = 0, bottom = m - 1, left = 0, right = n - 1
    let res = []
    while (top <= bottom && left <= right) {
        for (let j = left; j <= right; j++) res.push(matrix[top][j])
        top++
        for (let i = top; i <= bottom; i++) res.push(matrix[i][right])
        right--
        if (top <= bottom) {
            for (let j = right; j >= left; j--) res.push(matrix[bottom][j])
            bottom--
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) res.push(matrix[i][left])
            left++
        }
    }
    return res
}
