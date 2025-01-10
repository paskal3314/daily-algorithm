/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let point = 0;
  let num = -101;
  const found = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > num && found[nums[i]] !== true) {
      found[nums[i]] = true;
      nums[point] = nums[i];
      num = nums[i];
      point++;
    }
  }
  if (point === 0) {
    return nums.length > 0 ? 1 : 0;
  }
  return point;
};
