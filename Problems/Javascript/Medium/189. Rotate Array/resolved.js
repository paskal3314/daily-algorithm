/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length;
  const num = k % n;
  // console.log
  const first = nums.slice(n - num);
  const last = nums.slice(0, n - num);
  //   console.log({ first, last });
  for (let i = 0; i < first.length; i++) {
    nums[i] = first[i];
  }
  for (let i = first.length; i < n; i++) {
    nums[i] = last[i - first.length];
  }
};
