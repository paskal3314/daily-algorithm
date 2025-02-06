/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs.sort((a, b) => a.length - b.length);
  let result = "";
  let stack = "";
  const shortest = strs[0];
  for (let i = 0; i < shortest.length; i++) {
    if (strs.every((str) => str[i] === shortest[i])) {
      stack += shortest[i];
      result = result.length < stack.length ? stack : result;
    } else {
      return result;
    }
  }
  return result;
};
