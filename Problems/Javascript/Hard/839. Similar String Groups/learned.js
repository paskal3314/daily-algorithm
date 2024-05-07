/**
 * Beats 74% - DFS
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function (strs) {
  const l = strs.length;
  const strl = strs[0].length;
  const used = Array(l).fill(false);
  const queue = [];
  let result = 0;

  for (let i = 0; i < l; i++) {
    if (!used[i]) {
      result++;
      queue.push(strs[i]);
    }

    let curr;
    while (queue.length > 0) {
      curr = queue.pop();
      for (let j = 0; j < l; j++) {
        if (used[j]) continue;

        let diff = 0;
        for (let k = 0; k < strl; k++) {
          if (curr[k] !== strs[j][k]) {
            diff++;
            if (diff > 2) break;
          }
        }
        if (diff <= 2) {
          used[j] = true;
          queue.push(strs[j]);
        }
      }
    }
  }
  return result;
};
