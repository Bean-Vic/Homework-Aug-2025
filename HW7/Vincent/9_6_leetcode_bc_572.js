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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const same = (a, b) => {
        if (!a && !b) return true;
        if (!a || !b) return false;
        if (a.val !== b.val) return false;
        return (same(a.left, b.left) && same(a.right, b.right));
    }

    if (!subRoot) return true;
    if (!root) return false;
    if (same(root, subRoot)) return true;

    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot));

};