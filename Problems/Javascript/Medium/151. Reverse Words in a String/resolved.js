/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const stack = [];
  let left = s.length - 1;
  let right = s.length - 1;
  while (left <= right && left >= -1) {
    if (left === right) {
      left--;
    } else if (s[right] === " ") {
      right--;
    } else if (s[left] === " " || left === -1) {
      stack.push(s.substring(left + 1, right + 1));
      left--;
      right = left;
    } else {
      left--;
    }
  }
  return stack.join(" ");
};
