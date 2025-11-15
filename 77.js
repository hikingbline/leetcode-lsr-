//贪心算法
//77-买卖股票的最佳时机

// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。
// 设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回0 。

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 定义最低价格变量，初始化为 Infinity（无穷大），确保第一个价格一定会被赋值为初始最低价格
  let minPrice = Infinity;
  // 定义最大利润变量，初始化为 0（若始终无利润，返回 0）
  let maxProfit = 0;

  // 遍历价格数组中的每个价格
  for (let price of prices) {
    // 如果当前价格低于已知的最低价格，更新最低价格
    // 这一步的意义是：在当前位置之前找到历史最低价，作为潜在的买入点
    if (price < minPrice) {
      minPrice = price;
    }
    // 如果当前价格不低于最低价格，计算以当前价格卖出时的利润（当前价格 - 历史最低价）
    // 并与已知的最大利润比较，保留较大值
    else {
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  }
  // 遍历结束后，返回计算出的最大利润
  return maxProfit;
};