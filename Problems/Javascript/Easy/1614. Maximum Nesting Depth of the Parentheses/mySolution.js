/**
 * Beats 41%
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  const stack = [];
  let result = 0;
  for (const char of s) {
    if (char === "(") {
      stack.push(char);
      result = Math.max(result, stack.length);
    } else if (char === ")") {
      stack.pop();
    }
  }
  return result;
};
