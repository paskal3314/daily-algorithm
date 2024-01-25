/**
 * Beats 26.46%
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  return arr.filter((num, index) => fn(num, index));
};
