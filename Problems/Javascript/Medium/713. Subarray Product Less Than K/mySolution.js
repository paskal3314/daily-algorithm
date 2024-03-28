/**
 * Beats 8%
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  const n = nums.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    let stack = 1;
    let count = 0;
    for (let j = i; j < n; j++) {
      stack *= nums[j];
      if (stack >= k) {
        break;
      } else {
        count++;
      }
    }
    result += count;
  }
  return result;
};
