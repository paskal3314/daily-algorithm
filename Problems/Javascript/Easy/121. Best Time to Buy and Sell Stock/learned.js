/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    const profit = prices[right] - prices[left];
    if (profit < 0) {
      left = right++;
    } else {
      result = Math.max(profit, result);
      right++;
    }
  }
  return result;
};
