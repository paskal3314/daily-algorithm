/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;
  let left = 0;
  let right = 1;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      result += prices[right] - prices[left];
    }
    left = right++;
  }
  return result;
};
