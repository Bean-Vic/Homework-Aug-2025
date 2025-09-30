/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function checkSymmetricTree(root: TreeNode | null): boolean {
  if (!root) return true; // 空树对称

  function isMirror(t1, t2) {
    if (!t1 && !t2) return true; // 都为空 → 对称
    if (!t1 || !t2) return false; // 只有一个为空 → 不对称
    if (t1.val !== t2.val) return false; // 值不同 → 不对称

    // 递归检查左右子树是否镜像
    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
  }

  return isMirror(root.left, root.right);
}
