/* There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

*/
function pacificAtlantic(heights) {
    let m = heights.length
    if (m === 0) return []
    let n = heights[0].length
    let pac = Array.from({ length: m }, () => Array(n).fill(false))
    let atl = Array.from({ length: m }, () => Array(n).fill(false))
    let dirs = [[1,0],[-1,0],[0,1],[0,-1]]

    const dfs = (r, c, vis) => {
        let stack = [[r, c]]
        vis[r][c] = true
        while (stack.length) {
            let [x, y] = stack.pop()
            for (let [dx, dy] of dirs) {
                let nx = x + dx, ny = y + dy
                if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue
                if (vis[nx][ny]) continue
                if (heights[nx][ny] < heights[x][y]) continue
                vis[nx][ny] = true
                stack.push([nx, ny])
            }
        }
    }

    for (let i = 0; i < m; i++) {
        dfs(i, 0, pac)
        dfs(i, n - 1, atl)
    }
    for (let j = 0; j < n; j++) {
        dfs(0, j, pac)
        dfs(m - 1, j, atl)
    }

    let res = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pac[i][j] && atl[i][j]) res.push([i, j])
        }
    }
    return res
}
