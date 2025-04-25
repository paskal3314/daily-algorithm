/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let stack = 0;
  while (true) {
    if (nums.every((num) => num === 0)) {
      return stack;
    }
    const min = Math.min(...nums.filter((num) => num > 0));
    nums = nums.map((num) => Math.max(0, num - min));
    stack++;
  }
};
