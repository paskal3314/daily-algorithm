/**
 * Beats 38%
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function (s, k) {
  let result = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < s.length - 1; i++) {
    let vowelNum = 0;
    let consonantNum = 0;
    for (let j = i; j < s.length; j++) {
      if (vowels.includes(s[j])) {
        vowelNum++;
      } else {
        consonantNum++;
      }
      // console.log('[T]', {i, j, vowelNum, consonantNum})
      if (vowelNum > 0 && vowelNum === consonantNum && (vowelNum * consonantNum) % k === 0) {
        result++;
      }
    }
  }
  return result;
};
