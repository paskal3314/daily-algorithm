/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
  const map = {};
  for (const [price, beauty] of items) {
    map[price] = Math.max(map[price] || 0, beauty);
  }

  const keys = Object.keys(map);
  keys.sort();
  let stack = 0;
  for (const key of keys) {
    map[key] = stack = Math.max(map[key], stack);
  }

  const result = [];
  for (let i = 0; i < queries.length; i++) {
    let cost = queries[i];
    while (cost > 0) {
      if (map[cost]) {
        result.push(map[cost]);
        break;
      }
      cost--;
    }
    if (cost === 0) {
      result.push(0);
    }
  }
  return result;
};
