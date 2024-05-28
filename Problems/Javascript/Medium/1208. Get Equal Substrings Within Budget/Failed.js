/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  let max = 0;
  let left = 0;
  let right = 0;
  const n = s.length;
  let stack = 0;
  while (left < n && max < maxCost) {
    const val = Math.abs(s[right].charCodeAt() - t[right].charCodeAt());
    if (stack + val <= maxCost) {
      stack += val;
      max = Math.max(max, right - left + 1);
      right++;
    } else {
      const leftVal = Math.abs(s[left].charCodeAt() - t[left].charCodeAt());
      stack -= leftVal;
      left++;
    }
  }
  return max;
};
