/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximumSumQueries = function (nums1, nums2, queries) {
  const arr = [];
  for (let i = 0; i < nums1.length; i++) {
    arr.push({
      x: nums1[i],
      y: nums2[i],
      sum: nums1[i] + nums2[i],
    });
  }
  arr.sort((a, b) => b.sum - a.sum);

  const result = [];
  for (const query of queries) {
    const [minX, minY] = query;
    let sum = null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].x >= minX && arr[i].y >= minY) {
        sum = arr[i].sum;
        break;
      }
    }
    if (sum === null) {
      result.push(-1);
    } else {
      result.push(sum);
    }
  }

  return result;
};
