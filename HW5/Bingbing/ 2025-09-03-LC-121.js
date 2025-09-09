/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;  // 历史最低买入价
    let maxProfit = 0;        // 最大利润

    for (let p of prices) {
        // 更新最大利润
        maxProfit = Math.max(maxProfit, p - minPrice);
        // 更新最低买入价
        minPrice = Math.min(minPrice, p);
    }

    return maxProfit;
};
