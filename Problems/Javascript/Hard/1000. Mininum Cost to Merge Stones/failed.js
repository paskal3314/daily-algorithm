/**
 * @param {number[]} stones
 * @param {number} k
 * @return {number}
 */
var mergeStones = function (stones, k) {
  let cost = 0;
  while (stones.length >= k) {
    let min = Number.MAX_SAFE_INTEGER;
    let highest = 0;
    let firstIndex = 0;
    for (let i = 0; i < stones.length - k + 1; i++) {
      let currMin = 0;
      let currHighest = stones[i];
      for (let j = i; j < i + k; j++) {
        currMin += stones[j];
        currHighest = Math.max(currHighest, stones[j]);
      }
      if (min === currMin && highest < currHighest) {
        highest = currHighest;
        firstIndex = i;
      } else if (min > currMin) {
        min = currMin;
        highest = currHighest;
        firstIndex = i;
      } else {
        min = Math.min(min, currMin);
      }
    }
    cost += min;
    stones.splice(firstIndex, k, min);
  }
  return stones.length > 1 ? -1 : cost;
};
