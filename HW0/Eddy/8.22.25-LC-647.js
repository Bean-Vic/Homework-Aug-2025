/* Given a string s, return the number of palindromic substrings in it. A string is a palindrome when it reads the same backward as forward. A substring is a contiguous sequence of characters within the string. */

function countSubstrings(s) {
    let n = s.length, res = 0
    const expand = (l, r) => {
        while (l >= 0 && r < n && s[l] === s[r]) {
            res++
            l--
            r++
        }
    }
    for (let i = 0; i < n; i++) {
        expand(i, i)
        expand(i, i + 1)
    }
    return res
}
