/**
 * Beats 52%
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  for (let i = 0; i < edges.length; i++) {
    if (edges[i + 1].indexOf(edges[i][0]) > -1) {
      return edges[i][0];
    } else return edges[i][1];
  }
};
