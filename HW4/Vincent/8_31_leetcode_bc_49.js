/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const groups = {};

    for (let s of strs) {
        const count = new Array(26).fill(0);

        for (let c of s) {
            count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
        }

        const key = count.join("#");
        if (!groups[key]) groups[key] = [];
        groups[key].push(s);
    }

    return Object.values(groups);
};