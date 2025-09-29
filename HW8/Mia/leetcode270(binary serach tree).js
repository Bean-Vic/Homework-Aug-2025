/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  //如果跟节点不是空的话 看哪个最小
  let result = root.val;
  while (root !== null) {
    if (
      Math.abs(target - root.val) < Math.abs(target - result) ||
      (Math.abs(target - root.val) === Math.abs(target - result) &&
        root.val < result)
    ) {
      result = root.val;
    }
    root = root.val > target ? root.left : root.right;
  }
  return result;
};
