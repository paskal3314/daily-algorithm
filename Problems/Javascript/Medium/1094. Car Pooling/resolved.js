/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  const locationMax = Math.max(...trips.map((el) => el[2]));
  let hash = Array(locationMax + 1).fill(0);
  for (const [numPassengers, from, to] of trips) {
    for (let i = from; i < to; i++) {
      hash[i] += numPassengers;
      if (hash[i] > capacity) {
        return false;
      }
    }
  }
  // console.log("[T]", hash)
  return true;
};

carPooling([], 1);
