/**
 * @param {number[][]} edges
 * @return {number[]}
 *
 */
class UnionFind {
  constructor(n) {
    this.parent = new Array(n + 1);
    this.rank = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
      this.parent[i] = i; // 每个点最开始的父亲是自己
      this.rank[i] = 1; // 每个集合的大小先设为 1
    }
  }

  // Function to find which subset a particular element belongs to
  // Returns FALSE if both vertices have the same parent, otherwise, updates the parent and rank lists by making a connection based on the passed edge
  // Returns TRUE if no cycle exits in the graph
  find(v) {
    if (this.parent[v] !== v) {
      this.parent[v] = this.find(this.parent[v]);
    }
    return this.parent[v];
  }

  // Function to join two subsets into a single subset
  union(v1, v2) {
    // Find the root parents of v1 and v2
    const p1 = this.find(v1);
    const p2 = this.find(v2);

    // If both parents are the same, a cycle exists and v1,v2 is the redundant edge
    if (p1 === p2) {
      return false; // 两个点在同一个集合里 -> 出现环
    } else if (this.rank[p1] > this.rank[p2]) {
      this.parent[p2] = p1;
      this.rank[p1] += this.rank[p2];
    } else {
      this.parent[p1] = p2;
      this.rank[p2] += this.rank[p1];
    }

    return true; // 合并成功，没有成环
  }
}

var findRedundantConnection = function (edges) {
  const connections = new UnionFind(edges.length);
  console.log(connections);
  // connections是一个并查集的实例对象，它有两个重要方法可以用：
  // connections.find(v)
  // connections.union(v1, v2)
  for (const edge of edges) {
    // We use a loop to traverse the edges array, resulting in
    // O(n) iterations.
    let v1 = edge[0];
    let v2 = edge[1];
    console.log([v1, v2]);

    if (!connections.union(v1, v2)) {
      return edge;
    }
  }
  return [];
};

// The time complexity of the the Union and Find functions is
// O(α(n))
// , since both path compression and union find by rank are being used.
// α(n)is almost constant time and grows very slowly with the input size,
// so the time complexity of both these functions can be considered as constant time for practical purposes.
// Therefore, the overall time complexity becomes O(n×α(n))
// , which simplifies to O(n)
