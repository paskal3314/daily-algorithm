/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (Array.isArray(arr[j])) {
        const length = arr[j].length;
        arr = [...arr.slice(0, j), ...arr[j], ...arr.slice(j + 1)];
        j += length - 1;
      }
    }
  }
  return arr;
};
