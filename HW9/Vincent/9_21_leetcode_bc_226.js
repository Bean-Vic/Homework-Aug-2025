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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return null;

    let tmp_l = root.left;
    let tmp_r = root.right;

    root.left = tmp_r;
    root.right = tmp_l;

    if (root.left) invertTree(root.left);
    if (root.right) invertTree(root.right);

    return root;
};