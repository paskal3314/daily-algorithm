/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      const temp = nums[result];
      nums[result] = nums[i];
      nums[i] = temp;
      result++;
    }
  }
  return result;
};
