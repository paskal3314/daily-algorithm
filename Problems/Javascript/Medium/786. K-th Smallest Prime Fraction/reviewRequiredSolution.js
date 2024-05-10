/**
 * Beats 85%
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  let left = 0;
  let right = 1;
  const result = [];

  while (left <= right) {
    const mid = left + (right - left) / 2;
    let j = 1,
      total = 0,
      num = 0,
      den = 0;
    let maxFraction = 0;

    for (let i = 0; i < arr.length; i++) {
      while (j < arr.length && arr[i] >= arr[j] * mid) {
        j++;
      }
      total += arr.length - j;

      if (j < arr.length && maxFraction < arr[i] / arr[j]) {
        maxFraction = arr[i] / arr[j];
        num = i;
        den = j;
      }
    }

    if (total === k) {
      return [arr[num], arr[den]];
    }
    if (total > k) {
      right = mid;
    } else {
      left = mid;
    }
  }
};
