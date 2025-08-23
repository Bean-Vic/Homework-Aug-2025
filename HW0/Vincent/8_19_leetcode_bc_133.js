/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) {
        return null;
    }

    let new_graph = new Map();

    const dfs = (node) => {
        if (new_graph.has(node)) {
            return new_graph.get(node);
        }

        const clone_node = new Node(node.val);
        new_graph.set(node, clone_node)

        for (const neighbor of node.neighbors) {
            clone_node.neighbors.push(dfs(neighbor));
        }
        return clone_node;
    }
    return dfs(node);
};