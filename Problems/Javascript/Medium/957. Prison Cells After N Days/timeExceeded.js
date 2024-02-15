/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, n) {
  for (let i = 0; i < n; i++) {
    const newCells = Array(cells.length).fill(0);
    for (let j = 1; j < cells.length - 1; j++) {
      if (cells[j - 1] === cells[j + 1]) {
        newCells[j] = 1;
      }
    }
    cells = newCells;
  }
  return cells;
};
