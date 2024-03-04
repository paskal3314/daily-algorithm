/**
 * Beats 53%
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  const arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "?") continue;

    if (arr[i - 1] !== "a" && arr[i + 1] !== "a") {
      arr[i] = "a";
    } else if (arr[i - 1] !== "b" && arr[i + 1] !== "b") {
      arr[i] = "b";
    } else {
      arr[i] = "c";
    }
  }
  return arr.join("");
};
