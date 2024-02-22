/**
 * Beats 74%
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i <= Math.log2(n); i++) {
    const val = (n >> i) & 1;
    if (i % 2 === 0) {
      even += val;
    } else {
      odd += val;
    }
  }
  return [even, odd];
};
