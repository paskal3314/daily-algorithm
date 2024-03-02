/**
 * Beats 84%
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const nums = nums1.length < nums2.length ? nums1 : nums2;
  const otherNums = nums1.length < nums2.length ? nums2 : nums1;
  const result = [];
  for (const num of nums) {
    if (!result.includes(num) && otherNums.includes(num)) {
      result.push(num);
    }
  }
  return result;
};
