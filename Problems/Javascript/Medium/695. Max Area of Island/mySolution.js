/**
 * Beats 58.05%
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let result = 0;
  let n = grid.length;
  let m = grid[0].length;
  let visited = [];

  const getArea = (i, j) => {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] === 0 || visited[i]?.[j] === true) {
      return 0;
    }

    if (!visited[i]) {
      visited[i] = [];
    }

    visited[i][j] = true;
    return 1 + getArea(i - 1, j) + getArea(i, j - 1) + getArea(i + 1, j) + getArea(i, j + 1);
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j]) {
        result = Math.max(result, getArea(i, j));
      }
    }
  }
  return result;
};
