/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s || s.length < 1) return '';
    if (s.length === 1) return s;
    let res = '';
    for (let i = 0; i < s.length; i++) {
        let l = i,
            r = i;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > res.length) {
                res = s.slice(l, r + 1);
            }
            l--;
            r++;
        }
        l = i;
        r = i + 1;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > res.length) {
                res = s.slice(l, r + 1);
            }
            l--;
            r++;
        }
    }
    return res;
};
const str = 'cbbd';
const str2 = 'babad';
console.log(longestPalindrome(str2));
