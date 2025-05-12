/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
  nums = nums.slice(
    nums.findIndex((el) => el !== 0),
    nums.findLastIndex((el) => el !== 0) + 1
  );
  let left = 0;
  let right = 0;
  let ans = 0;
  while (left < nums.length) {
    if (nums[left] === 0) {
      right = ++left;
      continue;
    }
    while (right < nums.length && nums[right] !== 0) right++;

    ans = Math.max(ans, run(left, right));
    left = right = right + 1;
  }
  function run(left, right) {
    const subArr = nums.slice(left, right);
    if (!subArr.length || subArr.every((el) => el === 0)) return 0;

    let ans = 0;
    let productOfNums = 1;
    for (let i = 0; i < subArr.length; i++) {
      productOfNums *= subArr[i];
    }
    if (productOfNums > 0) {
      ans = Math.max(ans, subArr.length);
    } else {
      const firstNegativeIdx = subArr.findIndex((el) => el < 0);
      const lastNegativeIdx = subArr.findLastIndex((el) => el < 0);
      ans = Math.max(ans, subArr.length - Math.min(firstNegativeIdx + 1, subArr.length - lastNegativeIdx));
    }
    return ans;
  }

  return ans;
};
