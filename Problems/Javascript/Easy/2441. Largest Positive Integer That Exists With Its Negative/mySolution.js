/**
 * Beats 76%
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let max = -1;
  for (const num of nums) {
    const abs = Math.abs(num);
    if (abs > max && nums.indexOf(num * -1) !== -1) {
      max = abs;
    }
  }
  return max;
};
