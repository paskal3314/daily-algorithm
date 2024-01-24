/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function (nums, target) {
  const n = nums.length;
  let pos = 0;
  let result = 0;
  const stack = [nums[0]];

  while (pos !== n - 1) {
    for (let i = pos + 1; i < n; i++) {
      if (Math.abs(nums[i] - nums[pos]) <= target) {
        pos = i;
        result++;
        stack.push(nums[i]);
        break;
      } else if (i === n - 1 && Math.abs(nums[i] - nums[pos]) > target) {
        for (let j = stack.length - 1; j >= 0; j--) {
          if (Math.abs(stack[j] - nums[i]) <= target) {
            return stack.length - j - 1;
          }
        }
        return -1;
      }
    }
  }
  return result;
};
