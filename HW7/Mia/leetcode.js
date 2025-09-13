/**637 bfs
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//  dfs 递归 更简洁
//  bfs 更快
var averageOfLevels = function (root) {
  //queue 就是最后的结果 把root 放进去
  let queue = [root];
  let res = [];
  while (queue.length !== 0) {
    let size = queue.length; //这一层有多少个节点
    //初始化一个本层节点的和
    let sum = 0;
    for (let i = 0; i < size; i++) {
      //遍历这一层所有的节点 拿出每一个节点
      let curr = queue.shift();
      sum += curr.val;
      if (curr.left !== null) queue.push(curr.left);
      if (curr.right !== null) queue.push(curr.right);
    }
    res.push(sum / size);
  }
  return res;
};
