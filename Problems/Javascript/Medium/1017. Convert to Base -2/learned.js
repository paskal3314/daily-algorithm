/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function (n) {
  if (n === 0) return "0";

  let result = "";
  while (n !== 1) {
    result = Math.abs(n % -2).toString() + result;
    n = Math.ceil(n / -2);
  }
  return "1" + result;
};
