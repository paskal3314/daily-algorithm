/**
 * Beats 45.85%
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let curr = nums[0];
  let stack = 1;
  let numOfDeleted = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== curr) {
      curr = nums[i];
      stack = 1;
      continue;
    }
    stack++;
    if (stack > 2) {
      nums[i] = null;
      numOfDeleted++;
    }
  }
  nums.sort(alphabetically());
  nums.splice(0, numOfDeleted);
  return nums.length;
};

function alphabetically() {
  return function (a, b) {
    if (a === null) {
      return -1;
    }
    if (b === null) {
      return 1;
    }
    return a - b;
  };
}
