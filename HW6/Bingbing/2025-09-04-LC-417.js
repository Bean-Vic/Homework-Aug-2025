var pacificAtlantic = function(heights) {
    if (!heights || heights.length === 0) return [];

    const m = heights.length, n = heights[0].length;
    const pacific = new Set();
    const atlantic = new Set();
    const dirs = [[0,1], [0,-1], [1,0], [-1,0]];

    const dfs = (i, j, visited) => {
        visited.add(i + "," + j);
        for (let [dx, dy] of dirs) {
            const ni = i + dx, nj = j + dy;
            if (
                ni >= 0 && ni < m &&
                nj >= 0 && nj < n &&
                !visited.has(ni + "," + nj) &&
                heights[ni][nj] >= heights[i][j]
            ) {
                dfs(ni, nj, visited);
            }
        }
    };

    for (let i = 0; i < m; i++) {
        dfs(i, 0, pacific);       // Pacific 左边界
        dfs(i, n - 1, atlantic);  // Atlantic 右边界
    }

    for (let j = 0; j < n; j++) {
        dfs(0, j, pacific);       // Pacific 上边界
        dfs(m - 1, j, atlantic);  // Atlantic 下边界
    }

    const result = [];
    for (let cell of pacific) {
        if (atlantic.has(cell)) {
            const [i, j] = cell.split(",").map(Number);
            result.push([i, j]);
        }
    }

    return result;
};
