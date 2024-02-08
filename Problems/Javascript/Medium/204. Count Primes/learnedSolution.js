/**
 * sieve of Eratosthenes approach
 * Beats 20.66%
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const seen = [];
  let result = 0;

  for (let i = 2; i < n; i++) {
    if (seen[i] !== true) {
      result += 1;
      for (let j = i * i; j < n; j += i) {
        seen[j] = true;
      }
    }
  }
  return result;
};
