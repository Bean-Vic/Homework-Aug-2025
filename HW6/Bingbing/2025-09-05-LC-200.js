var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    const dfs = (r, c) => {
        // 越界或水（0）直接返回
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") {
            return;
        }
        // 标记为已访问
        grid[r][c] = "0";
        // 递归四个方向
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1") {
                islandCount++;
                dfs(r, c);
            }
        }
    }

    return islandCount;
};
