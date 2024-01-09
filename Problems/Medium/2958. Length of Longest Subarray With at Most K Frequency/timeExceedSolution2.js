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
  let fast = 1;
  const map = new Map(
    nums[slow] === nums[fast]
      ? [[nums[slow], 2]]
      : [
          [nums[slow], 1],
          [nums[fast], 1],
        ]
  );
  while (slow <= fast && fast < nums.length) {
    // console.log("[T]", {slow, fast, map})
    if ([...map.values()].every((num) => num <= k)) {
      // console.log("[T1]")
      result = Math.max(result, fast - slow + 1);
      fast++;
      map.set(nums[fast], (map.get(nums[fast]) || 0) + 1);
    } else {
      // console.log("[T2]")
      map.set(nums[slow], map.get(nums[slow]) - 1);
      slow++;
    }
  }
  return result;
};
