/**
 * Beats 100%
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  const maxCost = Math.max(...costs);
  const temp = Array(maxCost + 1).fill(0);
  for (let i = 0; i < costs.length; i++) {
    temp[costs[i]]++;
  }

  let result = 0;
  for (let i = 1; i < temp.length; i++) {
    if (temp[i] === 0) continue;
    if (coins >= temp[i] * i) {
      coins -= temp[i] * i;
      result += temp[i];
    } else {
      while (coins >= i) {
        coins -= i;
        temp[i]--;
        result++;
      }
      return result;
    }
  }
  return result;
};
