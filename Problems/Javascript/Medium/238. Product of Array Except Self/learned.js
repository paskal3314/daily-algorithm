/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const output = Array(nums.length).fill(1);

  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] = output[i] * left;
    left = left * nums[i];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = output[i] * right;
    right = right * nums[i];
  }
  return output;
};
