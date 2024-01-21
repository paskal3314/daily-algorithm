/**
 * Beats 45.45%
 * @param {string} s
 * @return {number}
 */
var secondsToRemoveOccurrences = function (s) {
  let count = 0;
  while (s.indexOf("01") !== -1) {
    s = s.replaceAll("01", "10");
    count++;
  }

  return count;
};
