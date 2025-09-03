/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m = board.length, n = board[0].length;

    // 8个方向: 上下左右 + 对角线
    const dirs = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    // Step 1: 遍历并标记过渡状态
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let liveNeighbors = 0;

            // 计算活邻居数
            for (let [dx, dy] of dirs) {
                const ni = i + dx, nj = j + dy;
                if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                    if (Math.abs(board[ni][nj]) === 1) {
                        liveNeighbors++;
                    }
                }
            }

            // 活细胞规则：<2 或 >3 → 死
            if (board[i][j] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
                board[i][j] = -1; // -1 表示原来活，现在死
            }

            // 死细胞规则：正好 3 → 复活
            if (board[i][j] === 0 && liveNeighbors === 3) {
                board[i][j] = 2; // 2 表示原来死，现在活
            }
        }
    }

    // Step 2: 更新最终状态
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] > 0) {
                board[i][j] = 1;
            } else {
                board[i][j] = 0;
            }
        }
    }
};
