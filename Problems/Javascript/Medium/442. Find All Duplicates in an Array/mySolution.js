/**
 * Beats 54%
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const hash = [];
  const result = [];
  for (const num of nums) {
    if (hash[num]) {
      result.push(num);
    } else {
      hash[num] = 1;
    }
  }
  return result;
};
