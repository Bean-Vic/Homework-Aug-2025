/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const output = [];
    for (let i = 0; i <= n; i++){
        let count = 0;
        let binary_rep = i.toString(2);
        for (const ch of binary_rep) {
            if (ch === "1") count += 1;
        }
        output.push(count);
    }
    return output;
};