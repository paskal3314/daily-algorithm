/**
 * Binary Search
 * Beats 64%
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
  items.sort((a, b) => a[0] - b[0]);
  let maxBeauty = 0;
  let hash = [];
  for (const [price, beauty] of items) {
    hash.push((maxBeauty = Math.max(maxBeauty, beauty)));
  }
  const result = [];
  for (let queryPrice of queries) {
    let low = 0;
    let high = items.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (items[mid][0] <= queryPrice) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    result.push(high >= 0 ? hash[high] : 0);
  }
  return result;
};
