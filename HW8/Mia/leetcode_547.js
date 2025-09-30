/**547
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let adj = {};
  for (let i = 0; i < isConnected.length; i++) {
    for (j = 0; j < isConnected[0].length; j++) {
      let val = isConnected[i][j];
      if (val === 1) {
        if (!adj[i]) {
          adj[i] = [j];
        } else {
          adj[i].push(j);
        }
        // i=0, j=0 → val=1，还没有 adj[0]，所以 adj[0] = [0]
        // i=0, j=1 → val=1，此时已有 adj[0]，所以 adj[0].push(1) → adj[0] = [0,1]
        // i=1, j=0 → val=1，新建 adj[1] = [0]
        // i=1, j=1 → val=1，adj[1].push(1) → adj[1] = [0,1]
        // i=2, j=2 → val=1，新建 adj[2] = [2]
      }
    }
  }
  let visited = new Set();
  let count = 0;
  console.log("adj", adj);
  for (let key in adj) {
    //the key in any object is always going to be a string
    let keyNum = parseInt(key);
    count += dfs(keyNum);
  }
  // 取出当前节点的邻居节点列表（即与 currNode 直接相连的所有节点）。
  // adj 是之前构建的邻接表对象，例如 adj[0] = [0,1]。
  function dfs(currNode) {
    if (visited.has(currNode)) {
      console.log("visite", visited);
      return 0;
    }
    visited.add(currNode);
    let neighbours = adj[currNode];

    for (let n of neighbours) {
      dfs(n);
    }
    return 1;
  }
  return count;
};
