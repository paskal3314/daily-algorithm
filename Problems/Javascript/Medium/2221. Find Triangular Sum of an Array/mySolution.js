/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  while (nums.length > 1) {
    for (let i = 0; i < nums.length - 1; i++) {
      const left = nums.shift();
      sum = left + (nums[0] % 10);
      nums.push(sum);
    }
    nums.shift();
  }
  return nums[0] % 10;
};
