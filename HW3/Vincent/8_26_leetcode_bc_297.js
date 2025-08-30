/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const out = [];
    (function dfs(node) {
        if (!node) {
            out.push("#");
            return;
        }
        out.push(node.val);
        dfs(node.left);
        dfs(node.right);
    })(root);

    return out.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data) return null;

    const vals = data.split(',');
    let i = 0;

    function build() {
        const v = vals[i++];
        if (v === "#" || v === undefined) return null;

        const node = new TreeNode(parseInt(v,10));
        node.left = build();
        node.right = build();

        return node
    }

    return build();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */