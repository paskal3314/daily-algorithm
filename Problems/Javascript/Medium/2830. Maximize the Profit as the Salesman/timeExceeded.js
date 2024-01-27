/**
 * @param {number} n
 * @param {number[][]} offers
 * @return {number}
 */
var maximizeTheProfit = function (n, offers) {
  let result = 0;
  const dp = new Array(n).fill(0);
  offers.sort((a, b) => a[1] - b[1]); //sort end

  for (let i = 0; i < offers.length; i++) {
    const [start, end, gold] = offers[i];

    if (end > 0 && dp[end - 1] === 0) {
      for (j = 1; j < end; j++) {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
    }

    dp[end] = Math.max(dp[end], dp[end - 1] || 0, gold + (dp[start - 1] || 0));
  }
  for (let i = n - 1; i >= 0; i--) {
    if (dp[i] > 0) {
      return dp[i];
    }
  }
  return dp[0];
};
