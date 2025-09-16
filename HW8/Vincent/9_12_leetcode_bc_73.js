/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const remove_rows = [];
    const remove_columns = [];

    const row = matrix.length;
    const column = matrix[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (matrix[i][j] === 0) {
                remove_rows.push(i);
                remove_columns.push(j);
            }
        }
    }

    for (const i_r of remove_rows){
        for (let j = 0; j < column; j++){
            matrix[i_r][j] = 0;
        }

    }

    for (const j_r of remove_columns){
        for (let i = 0; i < row; i++) {
            matrix[i][j_r] = 0;
        }
    }
};