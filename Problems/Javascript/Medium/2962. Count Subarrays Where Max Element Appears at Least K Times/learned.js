/**
 * Beats 25%
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  let left = 0;
  let right = 0;
  let count = 0;
  let max = Math.max(...nums);
  while (right < nums.length) {
    if (nums[right] === max) {
      k--;
    }
    right++;
    while (k === 0) {
      if (nums[left] === max) {
        k++;
      }
      left++;
    }
    count += left;
  }
  return count;
};
