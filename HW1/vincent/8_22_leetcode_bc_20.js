/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const mapping = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    const open_paren = new Array();

    for (const i of s) {
        if (i in mapping && open_paren) {
            open_bracket = open_paren.pop();
            if (mapping[i] != open_bracket) {
                return false
            }
        }
        else {
            open_paren.push(i);
        }
    }

    return open_paren.length == 0;

};