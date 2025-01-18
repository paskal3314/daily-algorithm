/**
 * @param {number[]} nums
 * @return {boolean}
 */
const visitedHash = {};
var canJump = function (nums) {
  const lastIndex = nums.length - 1;
  if (lastIndex === 0) return true;

  for (let i = lastIndex - 1; i >= 0; i--) {
    if (visitedHash[i]) continue;

    visitedHash[i] = true;
    if (lastIndex - i > nums[i]) {
      continue;
    } else {
      return canJump(nums.slice(0, lastIndex));
    }
  }
  return false;
};
