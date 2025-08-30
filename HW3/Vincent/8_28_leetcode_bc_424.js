/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const cnt = Object.create(null);
    let l = 0, maxFreq = 0, best = 0;

    for (let r = 0; r < s.length; r++) {
        const ch = s[r];
        cnt[ch] = (cnt[ch] || 0) + 1;
        if (cnt[ch] > maxFreq) maxFreq = cnt[ch];

        while(r-l+1 - maxFreq > k) {
            cnt[s[l]]--;
            l++;
        }
        best = Math.max(best, r-l+1);
    }

    return best;
};