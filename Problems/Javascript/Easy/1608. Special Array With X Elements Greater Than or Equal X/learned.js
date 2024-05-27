/**
 * Beats 58%
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  const check = (nums, index) => {
    let count = 0;
    for (const num of nums) {
      if (index <= num) {
        count++;
      }
    }
    return count;
  };

  for (let i = 0; i <= nums.length; i++) {
    if (check(nums, i) === i) {
      return i;
    }
  }
  return -1;
};
