/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const n = s.length;
    const existed_ways = Array(n+1).fill(0);

    if (n === 0 || s[0] === "0") return 0;

    existed_ways[0] = 1;
    existed_ways[1] = 1;

    for (let i = 2; i < n+1;i++) {
        if (s[i-1] !== "0") existed_ways[i] += existed_ways[i-1];
        const two = Number(s.slice(i-2,i));
        if (two >= 10 && two <= 26) existed_ways[i] += existed_ways[i-2];
    }

    return existed_ways[n];
};