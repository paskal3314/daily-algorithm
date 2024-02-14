/**
 * Beats 91.9%
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  const map = {};
  for (let i = 0; i < edges.length; i++) {
    const [val1, val2] = edges[i];
    if (map[val1] > 0) {
      return val1;
    } else if (map[val2] > 0) {
      return val2;
    } else {
      map[val1] = 1;
      map[val2] = 1;
    }
  }
};
