
var Trie = function() {
    this.stored_words = new Map();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let current_char_collection = this.stored_words;
    for (const ch of word) {
        if (!current_char_collection.has(ch)){
            current_char_collection.set(ch, new Map());
        }
        current_char_collection = current_char_collection.get(ch);
    }
    current_char_collection.set("end", true);
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let current_char_collection = this.stored_words;
    for (const ch of word) {
        if (!current_char_collection.has(ch)){
            return false
        }
        current_char_collection = current_char_collection.get(ch);
    }

    if (current_char_collection.has("end") && current_char_collection.get("end") === true) {
        return true
    };

    return false
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let current_char_collection = this.stored_words;
    for (const ch of prefix) {
        if (!current_char_collection.has(ch)){
            return false
        }
        current_char_collection = current_char_collection.get(ch);
    }

    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */