/* Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself. */
function isSubtree(root, subRoot) {
    if (!subRoot) return true
    if (!root) return false
    if (isSame(root, subRoot)) return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

function isSame(a, b) {
    if (!a && !b) return true
    if (!a || !b) return false
    if (a.val !== b.val) return false
    return isSame(a.left, b.left) && isSame(a.right, b.right)
}
