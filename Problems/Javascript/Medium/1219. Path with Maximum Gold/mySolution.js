/**
 * Beats 55%
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  function checkGrid(y, x) {
    if (y < 0 || x < 0 || y >= grid.length || x >= grid[0].length || grid[y][x] === 0) {
      return 0;
    }
    let stack = grid[y][x];
    let temp = grid[y][x];
    grid[y][x] = 0;
    const left = checkGrid(y, x - 1);
    const right = checkGrid(y, x + 1);
    const up = checkGrid(y - 1, x);
    const down = checkGrid(y + 1, x);
    grid[y][x] = temp;
    return stack + Math.max(left, right, up, down);
  }
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      result = Math.max(result, checkGrid(i, j));
    }
  }
  return result;
};
