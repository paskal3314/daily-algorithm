/**
 * Beats 100%
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function (nums, limit, goal) {
  const total = nums.reduce((sum, a) => sum + a, 0);
  const gap = Math.abs(total - goal);

  const mod = gap % limit;
  return mod > 0 ? Math.floor(gap / limit) + 1 : Math.floor(gap / limit);
};
