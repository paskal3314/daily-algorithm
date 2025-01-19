/**
 * @param {number[]} nums
 * @return {boolean}
 */
const visitedHash = {};
var canJump = function (nums) {
  let reachable = 0;
  for (let i = 0; i < nums.length; i++) {
    if (reachable < i) {
      return false;
    }

    reachable = Math.max(reachable, nums[i] + i);
    if (reachable >= nums.length - 1) {
      return true;
    }
  }
};
