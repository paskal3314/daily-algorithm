/**
 * @param {number[]} stones
 * @param {number} k
 * @return {number}
 */
var mergeStones = function (stones, k) {
  const n = stones.length;
  if ((n - 1) % (k - 1) > 0) return -1;

  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + stones[i];
  }

  const dp = new Array(n).fill(0).map((el) => new Array(n).fill(0));
  for (let m = k; m <= n; ++m) {
    for (let i = 0; i + m <= n; ++i) {
      let j = i + m - 1;
      dp[i][j] = Number.MAX_SAFE_INTEGER;
      for (let mid = i; mid < j; mid += k - 1) {
        dp[i][j] = Math.min(dp[i][j], dp[i][mid] + dp[mid + 1][j]);
      }
      if ((j - 1) % (k - 1) === 0) {
        dp[i][j] += prefix[j + 1] - prefix[i];
      }
    }
  }
  return dp[0][n - 1];
};
