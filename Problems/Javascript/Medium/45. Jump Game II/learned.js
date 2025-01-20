/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0;

  let pos = 0;
  let reachable = 0;
  let result = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    reachable = Math.max(reachable, i + nums[i]);

    if (i === pos) {
      result++;
      pos = reachable;

      if (pos >= nums.length - 1) return result;
    }
  }
};
