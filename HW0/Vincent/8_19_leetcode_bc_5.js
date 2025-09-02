/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const length = s.length;
    let bestL = 0, bestR = 0;

    function expandString(left, right) {
        while (left >= 0 && right < length && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1];
    }

    for (let i = 0; i < length; i++) {
        let [l1, r1] = expandString(i, i);
        if (r1 - l1 > bestR - bestL) {
            bestL = l1;
            bestR = r1;
        }

        let [l2, r2] = expandString(i, i + 1);
        if (r2 - l2 > bestR - bestL) {
            bestL = l2;
            bestR = r2;
        }
    }

    return s.substring(bestL, bestR + 1);
}