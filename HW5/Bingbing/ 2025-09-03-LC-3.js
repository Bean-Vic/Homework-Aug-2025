/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let mp = new Map();  
    let maxLen = 0;
    let l = 0;

    for (let r = 0; r < s.length; r++) {
        // 先更新左边界
        if (mp.has(s[r])) {
            l = Math.max(mp.get(s[r]) + 1, l);
        }
        // 更新结果和mp
        maxLen = Math.max(maxLen, r - l + 1);
        mp.set(s[r], r);
    }
    return maxLen;
};
