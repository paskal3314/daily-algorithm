/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  let result = 0;
  const data = countPath(startRow, startColumn, maxMove, m, n);
  result += data;
  return result;
};

function countPath(y, x, maxMove, maxM, maxN) {
  if (maxMove < 0) {
    return 0;
  } else if (y < 0 || x < 0 || y >= maxM || x >= maxN) {
    return 1;
  }
  const up = countPath(y - 1, x, maxMove - 1, maxM, maxN);
  const down = countPath(y + 1, x, maxMove - 1, maxM, maxN);
  const right = countPath(y, x + 1, maxMove - 1, maxM, maxN);
  const left = countPath(y, x - 1, maxMove - 1, maxM, maxN);
  return left + right + up + down;
}
