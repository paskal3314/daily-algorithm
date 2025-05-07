/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const n = nums.length;

  if (n === 0) return 0;

  nums.sort((a, b) => a - b);
  let cnt = 1;
  let max = 1;

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === nums[i + 1]) continue;
    if (nums[i + 1] - nums[i] === 1) {
      cnt++;
    } else {
      max = Math.max(max, cnt);
      cnt = 1;
    }
  }

  return Math.max(max, cnt);
};
