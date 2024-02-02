/**
 * Beats 31.58%
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  const map = {};
  let totalPairs = 0;
  let goodPairs = 0;
  for (let i = 0; i < nums.length; i++) {
    totalPairs += i;
    const calc = nums[i] - i;
    if (map[calc]) {
      goodPairs += map[calc];
      map[calc]++;
    } else {
      map[calc] = 1;
    }
  }
  return totalPairs - goodPairs;
};
