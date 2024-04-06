/**
 * Beats 12%
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const charCodeGap = 32;
  const stack = [];
  for (const char of s) {
    if (stack.length > 0 && Math.abs(char.charCodeAt() - stack[stack.length - 1].charCodeAt()) === charCodeGap) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};
