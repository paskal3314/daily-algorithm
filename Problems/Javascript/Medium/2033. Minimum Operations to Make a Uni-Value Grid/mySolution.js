/**
 * Beats 20%
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
  const flat = grid.flatMap((num) => num);
  if (flat.length < 2) return 0;

  flat.sort((a, b) => a - b);
  let mod = flat[0] % x;
  for (let i = 1; i < flat.length; i++) {
    if (flat[i] % x !== mod) {
      return -1;
    }
  }

  const midVal1 = flat[Math.floor(flat.length / 2)];
  const midVal2 = flat[Math.ceil(flat.length / 2)];

  if (midVal1 === midVal2) {
    let result = 0;
    const midVal = midVal1;
    for (let i = 0; i < flat.length; i++) {
      result += Math.abs(midVal - flat[i]) / x;
    }
    return result;
  } else {
    let result1 = 0;
    let result2 = 0;
    for (let i = 0; i < flat.length; i++) {
      result1 += Math.abs(midVal1 - flat[i]) / x;
      result2 += Math.abs(midVal2 - flat[i]) / x;
    }
    return Math.min(result1, result2);
  }
};
