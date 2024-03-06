/**
 * Beats 30%
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let high = s.length;
  let low = 0;
  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") result.push(low++);
    else result.push(high--);
  }

  if (s[s.length - 1] === "I") result.push(low);
  else result.push(high);
  return result;
};
