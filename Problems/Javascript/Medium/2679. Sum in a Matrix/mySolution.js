/**
 * Beats 65.22%
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function (nums) {
  let score = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i].sort((a, b) => b - a);
  }
  for (let i = 0; i < nums[0].length; i++) {
    const max = Math.max(...nums.map((arr) => arr[i]));
    score += max;
  }
  return score;
};
