/**
 * Time Complexity: O(n) 
 *   - Each character is visited at most twice (right pointer and left pointer).
 * Space Complexity: O(k)
 *   - k is the size of the charset stored in the Map.
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length;
    const mp = new Map();
    let l = 0;
    let ans = 0;

    for (let r = 0; r < n; r++) {
        if (mp.has(s[r])) {
            l = Math.max(l, mp.get(s[r]) + 1);
        }
        mp.set(s[r], r);
        ans = Math.max(ans, r - l + 1);
    }

    return ans;
};
