/**
 * Beats 44.67%
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
  if (nums.length < 1) {
    return 0;
  }
  const map = {};
  let result = 1;
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }

  for (let key in map) {
    let length = 1;
    let fnd = Math.pow(key, 0.5);
    while (fnd >= 2) {
      if (map[fnd] >= 2) {
        length += 2;
        fnd = Math.pow(fnd, 0.5);
      } else {
        break;
      }
    }
    result = Math.max(result, length);
  }
  if (map[1] > result) {
    if (map[1] % 2 === 1) {
      return map[1];
    } else {
      return map[1] - 1;
    }
  }
  return result;
};
