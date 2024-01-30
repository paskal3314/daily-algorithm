/**
 * Beats 82.05%
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let result = 0;
  const vowels = { a: true, e: true, i: true, o: true, u: true };
  let start = 0;
  let count = 0;
  for (let end = 0; end < s.length; end++) {
    if (vowels[s[end]]) {
      count++;
    }
    if (end - start + 1 > k) {
      if (vowels[s[start]]) {
        count--;
      }
      start++;
    }
    if (count === k) {
      return k;
    }
    result = Math.max(count, result);
  }
  return result;
};
