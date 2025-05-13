/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let ans = 0;
  for (const [num, unit] of boxTypes) {
    if (truckSize >= num) {
      ans += num * unit;
      truckSize -= num;
    } else {
      ans += truckSize * unit;
      break;
    }
  }
  return ans;
};
