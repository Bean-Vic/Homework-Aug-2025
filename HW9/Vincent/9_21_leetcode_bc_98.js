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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return dfs(root, Math.max(), Math.min())
};

const dfs = (node, low, high) => {
    if (!node) return true;
    if (node.val <= low || node.val >= high) return false;
    return (dfs(node.left, low, node.val) && dfs(node.right, node.val, high))
}