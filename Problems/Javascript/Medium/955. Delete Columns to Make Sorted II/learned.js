/**
 * Beats 17%
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  const n = strs.length;
  let count = 0;
  while (strs[0].length > 0) {
    let inOrderFg = true;
    let deleteIndex = 0;
    for (let i = 0; i < n; i++) {
      if (strs[i] > strs[i + 1]) {
        inOrderFg = false;
        for (let j = 0; j < strs[i].length; j++) {
          if (strs[i][j] > strs[i + 1][j]) {
            deleteIndex = j;
            break;
          }
        }
        break;
      }
    }
    if (inOrderFg) return count;
    for (let i = 0; i < n; i++) {
      strs[i] = strs[i].substring(0, deleteIndex) + strs[i].substring(deleteIndex + 1);
    }
    count++;
  }
  return count;
};
