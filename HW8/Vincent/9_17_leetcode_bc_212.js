function TrieNode() {
    this.end = "";
    this.ch = new Map();
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const m = board.length, n = board[0].length;
    const output = [];
    this.root = new TrieNode();

    for (const word of words){
        let node = this.root;
        for(const c of word){
            if (!node.ch.has(c)) {
                node.ch.set(c, new TrieNode());
            }
            node = node.ch.get(c);
        }
        node.end = word;
    }

    dirs_ = [[0,1],[0,-1],[1,0],[-1,0]]

    const dfs = (i,j,par_node) => {
        let current_c = board[i][j];
        if (!par_node.ch.has(current_c)) return
        let node = par_node.ch.get(current_c)

        if (node.end !== "") {
            output.push(node.end);
            node.end = "";
        }

        board[i][j] = "1"
        for (const [dx, dy] of dirs_) {
            let nx = i + dx, ny = j + dy;
            if (0 <= nx && nx < m && 0 <= ny && ny < n &&
                node.ch.has(board[nx][ny])) {
                    dfs(nx, ny, node);
                }
        }
        board[i][j] = current_c;
    }

    for (let r = 0; r < m; r++){
        for (let c = 0; c < n; c++ ){
            if (this.root.ch.has(board[r][c])){
                dfs(r,c,this.root);
            }

        }
    }

    return output

};