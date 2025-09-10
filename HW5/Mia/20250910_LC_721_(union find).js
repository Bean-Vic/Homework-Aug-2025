class UnionFind {
  // Constructor
  constructor(n) {
    this.parent = new Array(n).fill(0);
    this.rank = new Array(n).fill(1);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }
  // Function to find which subset a particular element belongs to.
  find(v) {
    if (this.parent[v] !== v) {
      this.parent[v] = this.find(this.parent[v]);
    }
    return this.parent[v];
  }
  // Function to join two subsets into a single subset.
  union(v1, v2) {
    let p1 = this.find(v1);
    let p2 = this.find(v2);
    if (p1 !== p2) {
      if (this.rank[p1] > this.rank[p2]) {
        this.parent[p2] = p1;
        this.rank[p1] += this.rank[p2];
      } else {
        this.parent[p1] = p2;
        this.rank[p2] += this.rank[p1];
      }
    }
  }
}

function accountsMerge(accounts) {
  const uf = new UnionFind(accounts.length);
  const emailMapping = new Map();

  for (let i = 0; i < accounts.length; ++i) {
    const emails = accounts[i];

    for (let j = 1; j < emails.length; ++j) {
      if (emailMapping.has(emails[j])) {
        if (accounts[i][0] !== accounts[emailMapping.get(emails[j])][0])
          return [];
        uf.union(emailMapping.get(emails[j]), i);
      }

      emailMapping.set(emails[j], i);
    }
  }
  console.log("emailMapping", emailMapping);
  const mergedAccounts = new Map();

  for (const [email, id] of emailMapping.entries()) {
    const root = uf.find(id);
    if (!mergedAccounts.has(root)) {
      mergedAccounts.set(root, []);
    }
    mergedAccounts.get(root).push(email);
  }

  const finalMerged = [];
  for (const [parent, emails] of mergedAccounts.entries()) {
    emails.sort();
    const merged = [accounts[parent][0], ...emails];
    finalMerged.push(merged);
  }
  return finalMerged;
}
