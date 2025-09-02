/* Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb" */


function longestPalindrome(s) {
    if (s.length < 2) return s
    let start = 0, end = 0
    const n = s.length
    const expand = (l, r) => {
        while (l >= 0 && r < n && s[l] === s[r]) { l--; r++; }
        return [l + 1, r - 1]
    }
    for (let i = 0; i < n; i++) {
        let [l1, r1] = expand(i, i)
        if (r1 - l1 > end - start) { start = l1; end = r1 }
        let [l2, r2] = expand(i, i + 1)
        if (r2 - l2 > end - start) { start = l2; end = r2 }
    }
    return s.slice(start, end + 1)
}

