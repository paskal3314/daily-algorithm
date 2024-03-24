/**
 * Beats 28%
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const map = [];
  for (const num of nums) {
    if (map[num]) return num;
    else map[num] = 1;
  }
  return -1;
};
