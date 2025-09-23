/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const row_n = board.length;
    const column_n = board[0].length;

    const visited = [];
    for (let i = 0; i < row_n; i++) {
        visited.push(new Array(column_n).fill(false));
    }
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    const dfs = (x, y, i) => {
        if (i == word.length - 1) {
            return true
        }
        visited[x][y] = true;

        for (const [dx, dy] of dirs){
            let nx = x + dx;
            let ny = y + dy;
            if (0 <= nx && nx < row_n &&
                0 <= ny && ny < column_n &&
                !visited[nx][ny] &&
                board[nx][ny] === word[i+1] &&
                dfs(nx, ny, i+1)) {
                    return true
                }
        }
        visited[x][y] = false;
        return false;
    }

    for (let r = 0; r < row_n; r++){
        for (let c = 0; c < column_n; c++){
            if (board[r][c] === word[0] && dfs(r, c, 0)) {
                return true;
            }
        }
    }

    return false
};