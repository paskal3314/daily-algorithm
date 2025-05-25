/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ans = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2 && nums[i] <= 0; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];
      if (total < 0) {
        left++;
      } else if (total > 0) {
        right--;
      } else {
        ans.push([nums[i], nums[left], nums[right]]);
        left++;

        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  return ans;
};
