/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
  if (nums.length === 1) {
    return k === 1 ? 1 : 0;
  }

  let result = 0;
  let slow = 0;
  const map = {};

  for (let fast = 0; fast < nums.length; fast++) {
    const curr = nums[fast];
    map[curr] = (map[curr] || 0) + 1;

    if (map[curr] > k) {
      while (slow < fast && map[curr] > k) {
        map[nums[slow]]--;
        slow++;
      }
    }

    result = Math.max(result, fast - slow + 1);
  }

  return result;
};
