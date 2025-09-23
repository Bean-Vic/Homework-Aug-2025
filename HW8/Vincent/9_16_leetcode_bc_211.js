const TrieNode = function() {
    this.end = false;
    this.ch = new Map();
}


var WordDictionary = function() {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;

    for (const c of word) {
        if (!node.ch.has(c)) node.ch.set(c, new TrieNode());
        node = node.ch.get(c);
    }
    node.end = true
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const dfs = (node, i) => {
        if (i === word.length) return node.end;

        let c = word[i];
        if (c === ".") {
            for (const child_node of [...node.ch.values()]) {
                if (dfs(child_node, i+1)) return true;
            }
            return false;
        } else {
            if (!node.ch.has(c)) return false;
            return dfs(node.ch.get(c), i+1);
        }
    }

    return dfs(this.root, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */