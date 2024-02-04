/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let r = j + 1; r < nums.length; r++) {
        if (nums[i] < nums[r] && nums[r] < nums[j]) {
          return true;
        }
      }
    }
  }
  return false;
};
