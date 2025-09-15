/* Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words. */

function wordBreak(s, wordDict) {
    let set = new Set(wordDict)
    let n = s.length
    let dp = new Array(n + 1).fill(false)
    dp[0] = true
    let maxLen = 0
    for (let w of set) if (w.length > maxLen) maxLen = w.length
    for (let i = 1; i <= n; i++) {
        for (let j = Math.max(0, i - maxLen); j < i; j++) {
            if (dp[j] && set.has(s.slice(j, i))) { dp[i] = true; break }
        }
    }
    return dp[n]
}

