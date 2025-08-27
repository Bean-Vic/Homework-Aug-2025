/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const words = new Set(wordDict);
    const string_length = s.length;
    let maxw = 0;

    for (const word of wordDict) {
        maxw = Math.max(word.length, maxw);
    }

    const dp = Array(string_length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i < string_length + 1; i++) {
        for (let left = 1; left < Math.min(maxw, i) + 1; left ++) {
            if (!dp[i-left]) {
                continue;
            }
            if (wordDict.includes(s.slice(i-left, i))) {
                dp[i] = true;
            }
        }
    }

    return dp[string_length];
};