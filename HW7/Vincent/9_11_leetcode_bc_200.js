/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length <= 0 || grid[0].length <= 0) return 0

    let islands = 0;
    const direction = [[1,0], [-1,0], [0,1], [0,-1]]
    let row = grid.length;
    let column = grid[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (grid[i][j] === "1") {
                islands += 1;
                const connected = [[i,j]];
                grid[i][j] = "0";

                while (connected.length !== 0) {
                    const [x, y] = connected.pop();
                    for (const [dx, dy] of direction) {
                        let nx = x+dx;
                        let ny = y+dy;
                        if (0 <= nx && nx < row &&
                            0 <= ny && ny < column &&
                            grid[nx][ny] === "1") {
                                connected.push([nx,ny]);
                                grid[nx][ny] = "0";
                            }
                    }
                }
            }
        }
    }
    return islands;
};