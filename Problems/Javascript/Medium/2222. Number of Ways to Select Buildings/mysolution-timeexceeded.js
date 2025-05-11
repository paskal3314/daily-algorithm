/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function (s) {
  const n = s.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (j = n - 1; j > i + 1; j--) {
      if (s[i] !== s[j]) continue;

      for (let p = i + 1; p < j; p++) {
        if (s[i] !== s[p]) ans++;
      }
    }
  }
  return ans;
};
