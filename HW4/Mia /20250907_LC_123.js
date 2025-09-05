/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //初始化
  //dp[0][0] = 0;
  let buy1 = -prices[0]; //手头上初始现金是0
  let sell1 = 0; //第一次不持有，卖出 当天买卖 现金为0
  let buy2 = -prices[0]; //第二次买入
  let sell2 = 0; //第二次卖出后是多少
  for (let i = 1; i < prices.length; i++) {
    //0我们已经初始化过了
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }
  return Math.max(sell1, sell2);
  //其实第二次卖出就已经包含第一次卖出的值了
  //所以第二次卖出一定是最大值
};
