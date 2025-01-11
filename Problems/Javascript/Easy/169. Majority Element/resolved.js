/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const hash = {};
  for (const num of nums) {
    hash[num] = (hash[num] || 0) + 1;
  }
  return parseInt(
    Object.entries(hash).find(([num, total]) => {
      return total > nums.length / 2;
    })[0]
  );
};
