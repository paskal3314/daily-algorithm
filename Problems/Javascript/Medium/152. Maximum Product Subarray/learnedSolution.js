/**
 * Beats 33.61%
 * Review required
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let prevMin = nums[0];
  let prevMax = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const currMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
    const currMin = Math.min(nums[i] * prevMax, nums[i], nums[i] * prevMin);
    result = Math.max(currMax, result);
    prevMin = currMin;
    prevMax = currMax;
  }
  return result;
};
