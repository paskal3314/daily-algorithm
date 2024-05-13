/**
 * Beats 80%
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (grid) {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][0] === 0) {
      grid[i] = grid[i].map((val) => (val === 1 ? 0 : 1));
    }
  }
  for (let i = 1; i < grid[0].length; i++) {
    let summ = grid.reduce((acc, row) => {
      return acc + row[i];
    }, 0);
    if (summ < grid.length / 2) {
      for (let j = 0; j < grid.length; j++) {
        grid[j][i] = grid[j][i] === 1 ? 0 : 1;
      }
    }
  }
  for (let i = 0; i < grid.length; i++) {
    const binaryStr = grid[i].join("");
    result += parseInt(binaryStr, 2);
  }
  return result;
};
