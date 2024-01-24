/**
 * Beats 88.46%
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function (nums, target) {
  const arr = new Array(nums.length).fill(-1);
  arr[0] = 0;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (Math.abs(nums[i] - nums[j]) <= target && arr[j] !== -1) {
        arr[i] = Math.max(arr[i], arr[j] + 1);
      }
    }
  }
  return arr[nums.length - 1];
};
