/**
 * Beats 68.19%
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const map = {};
  for (let i = 0; i < stones.length; i++) {
    if (!map[stones[i]]) {
      map[stones[i]] = 1;
    } else {
      map[stones[i]]++;
    }
  }
  let result = 0;
  for (let i = 0; i < jewels.length; i++) {
    result += map[jewels[i]] || 0;
  }

  return result;
};
