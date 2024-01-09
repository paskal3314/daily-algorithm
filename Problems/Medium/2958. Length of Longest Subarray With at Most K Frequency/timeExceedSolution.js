/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
  let result = 0;
  for (let i = 0; i < nums.length && nums.length - i >= k; i++) {
    const map = new Map();
    for (let j = i; j < nums.length; j++) {
      const prevVal = map.get(nums[j]);
      let newVal;
      if (prevVal > 0) {
        newVal = prevVal + 1;
      } else {
        newVal = 1;
      }
      map.set(nums[j], newVal);

      if (newVal <= k && [...map.values()].every((num) => num <= k)) {
        result = Math.max(result, j - i + 1);
      } else if (newVal > k) {
        if (nums[i] !== nums[j]) {
          i = j - 1;
        }
        break;
      }
    }
  }
  return result;
};
