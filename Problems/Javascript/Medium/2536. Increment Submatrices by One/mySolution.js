/**
 * Beats 17%
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function (n, queries) {
  const matrix = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  for (const [x1, y1, x2, y2] of queries) {
    for (let x = x1; x <= x2; x++) {
      for (let y = y1; y <= y2; y++) {
        matrix[x][y]++;
      }
    }
  }
  return matrix;
};
