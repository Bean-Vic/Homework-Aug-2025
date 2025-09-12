/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) return 0;

    dp = Array(amount+1).fill(Math.min());
    dp[0] = 0;
    for (let c of coins){
        for (let i = c; i < amount+1; i++){
            dp[i] = Math.min(dp[i], dp[i-c]+1);
        }
    }

    if (dp[amount] === Math.min()) return -1;
    else return dp[amount];
};