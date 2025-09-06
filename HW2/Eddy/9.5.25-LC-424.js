/* You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.*/
function characterReplacement(s, k) {
    let cnt = new Array(26).fill(0)
    let l = 0, res = 0, maxc = 0
    for (let r = 0; r < s.length; r++) {
        let idx = s.charCodeAt(r) - 65
        cnt[idx]++
        if (cnt[idx] > maxc) maxc = cnt[idx]
        while (r - l + 1 - maxc > k) {
            cnt[s.charCodeAt(l) - 65]--
            l++
        }
        if (r - l + 1 > res) res = r - l + 1
    }
    return res
}
