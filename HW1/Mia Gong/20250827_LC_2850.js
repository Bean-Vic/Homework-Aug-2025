/**2850. 将石头分散到网格图的最少移动次数
 * 给你一个大小为 3 * 3 ，下标从 0 开始的二维整数矩阵 grid ，分别表示每一个格子里石头的数目。网格图中总共恰好有 9 个石头，一个格子里可能会有 多个 石头。
每一次操作中，你可以将一个石头从它当前所在格子移动到一个至少有一条公共边的相邻格子。
请你返回每个格子恰好有一个石头的 最少移动次数 。
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function (grid) {
  let global = Infinity;
  const dfs = (cur, moves, grid) => {
    if (moves >= global) return;
    if (cur === 9) {
      global = Math.min(global, moves);
      return;
    }
    let i = Math.floor(cur / 3);
    let j = cur % 3;
    if (grid[i][j] !== 0) {
      dfs(cur + 1, moves, grid);
      return;
    }
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        if (grid[x][y] <= 1) continue;
        grid[x][y] -= 1;
        grid[i][j] += 1;
        dfs(cur + 1, moves + Math.abs(x - i) + Math.abs(y - j), grid);
        grid[x][y] += 1;
        grid[i][j] -= 1;
      }
    }
  };
  dfs(0, 0, grid);
  return global;
};
