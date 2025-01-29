/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  for (let i = 0; i < gas.length; i++) {
    let tank = gas[i];
    let result = true;
    for (let j = 1; j <= gas.length; j++) {
      const nextPos = (i + j) % gas.length;
      tank -= cost[(i + j - 1) % gas.length];
      if (tank < 0) {
        result = false;
        break;
      } else {
        tank += gas[nextPos];
      }
    }
    if (result) {
      return i;
    }
  }
  return -1;
};
