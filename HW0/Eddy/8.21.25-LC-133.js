/* Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph. Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors. class Node { public int val; public List<Node> neighbors; } */
function cloneGraph(node) {
    if (!node) return null
    let map = new Map()
    const dfs = (n) => {
        if (map.has(n)) return map.get(n)
        let copy = new Node(n.val)
        map.set(n, copy)
        for (let nei of n.neighbors) {
            copy.neighbors.push(dfs(nei))
        }
        return copy
    }
    return dfs(node)
}
