/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const trimmedString = s.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  let left = 0;
  let right = trimmedString.length - 1;

  while (left < right) {
    if (trimmedString[left++] !== trimmedString[right--]) return false;
  }
  return true;
};
