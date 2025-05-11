/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function (s) {
  let one = (oneZero = zero = zeroOne = total = 0);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      one += 1;
      zeroOne += zero;
      total += oneZero;
    } else {
      zero += 1;
      oneZero += one;
      total += zeroOne;
    }
  }
  return total;
};
