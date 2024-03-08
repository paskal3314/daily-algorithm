/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
  const n = Math.max(...queries) + 1;
  const stack = new Array(n).fill(0);
  for (const [price, beauty] of items) {
    stack[price] = Math.max(stack[price], beauty);
  }
  for (let i = 1; i < n; i++) {
    stack[i] = Math.max(stack[i - 1], stack[i]);
  }
  const result = [];
  for (let i = 0; i < queries.length; i++) {
    result.push(stack[queries[i]]);
  }
  return result;
};
