/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    if (!heights || heights.length === 0 || heights[0].length === 0) return []

    let row = heights.length, column = heights[0].length;

    const dfs = (starts) => {
        const reachable = Array.from({length: row}, () => Array(column).fill(false));
        const stack = []
        for (const [r, c] of starts){
            if (!reachable[r][c]) {
                reachable[r][c] = true;
                stack.push([r,c]);
            }
        }

        const dirs = [[1,0], [-1,0], [0,1], [0,-1]]
        while (stack.length) {
            const [r, c] = stack.pop();
            const h = heights[r][c];
            for (const [dr, dc] of dirs) {
                let nr = r+dr, nc = c+dc;
                if (
                    nr >= 0 && nr < row &&
                    nc >= 0 && nc < column &&
                    !reachable[nr][nc] &&
                    heights[nr][nc] >= h
                ) {
                    reachable[nr][nc] = true;
                    stack.push([nr,nc]);
                }
            }
        }

        return reachable
    }

    const p_s = new Array(), a_s = new Array();
    for (let i = 0; i < row; i++){
        p_s.push([i, 0]);
        a_s.push([i, column-1]);
    }
    for (let j = 0; j < column; j++){
        p_s.push([0,j]);
        a_s.push([row-1,j]);
    }

    let p_r = dfs(p_s);
    let a_r = dfs(a_s);
    let final = new Array();

    for (let i = 0; i < row; i++){
        for (let j = 0; j < column; j++){
            if (p_r[i][j] && a_r[i][j]){
                final.push([i,j]);
            }
        }
    }

    return final

};