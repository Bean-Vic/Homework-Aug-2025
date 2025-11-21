
//542. 01 矩阵
function updateMatrix(mat: number[][]): number[][] {
    // 定义四个方向：上、下、右、左
    let dirs = [[0, -1], [0,1], [1,0],[-1,0]];
    let queue = []
    // 第一次遍历矩阵
    for(let i = 0; i < mat.length; i++){
        for(let j =0; j < mat[0].length; j++){
            if(mat[i][j] === 0){
                // 如果是0，加入队列，距离为0
                queue.push([i,j,0]);
            }else{
                // 如果是1，先标记为无穷大（表示尚未处理）
                mat[i][j] = Infinity; 
            }
        }
    }
    // BFS 广度优先搜索
    while(queue.length){
        // 从队列头部取出一个元素
        let [currX,currY,dist] = queue.shift()
        
        // 如果当前距离比矩阵中记录的距离小，更新矩阵值
        if(mat[currX][currY] > dist){
            mat[currX][currY] = dist
        }
        
        // 遍历四个方向
        for(let [x,y] of dirs){
            // 计算相邻单元格的坐标和距离
            let [nextX,nextY,nextVal] = [currX+x, currY + y, dist+1]

            // 检查边界：如果超出矩阵范围则跳过
            if(nextX < 0 || nextX > mat.length-1||nextY <0||nextY > mat[0].length-1)
            continue; 
            
            // 如果相邻单元格是尚未处理的1（标记为Infinity）
            if(mat[nextX][nextY] === Infinity){
                // 加入队列继续处理
                queue.push([nextX,nextY,nextVal])
            }
        }
    }
    return mat
};