/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const map = [];
  let val = 1;
  for (const [start, end] of intervals) {
    for (let i = start; i <= end; i++) {
      map[i] = val;
    }
    val++;
  }
  const [newStart, newEnd] = newInterval;

  let newVal = map[newStart];
  for (let i = newStart; i <= newEnd; i++) {
    if (map[i] !== newVal && map[i] > newVal) {
      const temp = map[i];
      map[i] = newVal;
      for (let j = 0; j < map.length; j++) {
        if (map[j] === temp) {
          map[j] === newVal;
        }
      }
    } else {
      map[i] = newVal;
    }
  }

  const result = [];
  // console.log("[T]", map)
  let start = -1;
  let curr = -1;
  for (let i = 0; i < map.length; i++) {
    if (curr === -1 && map[i] >= 1) {
      start = i;
      curr = map[i];
    } else if (curr !== -1 && map[i] !== curr) {
      result.push([start, i - 1]);
      if (map[i] > curr) {
        start = i;
        curr = map[i];
      } else {
        start = -1;
        curr = -1;
      }
    }
  }
  return result;
};
