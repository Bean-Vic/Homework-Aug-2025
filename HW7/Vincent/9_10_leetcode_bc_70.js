/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1
    else if (n === 2) return 2
    else {
        const dp = Array(n).fill(0);
        dp[0] = 1
        dp[1] = 2
        for (let i = 2; i < n; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }
        return dp[n-1];
    }
};