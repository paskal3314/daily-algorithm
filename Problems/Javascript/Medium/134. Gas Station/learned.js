/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const totalGas = gas.reduce((a, b) => a + b, 0);
  const totalCost = cost.reduce((a, b) => a + b, 0);
  if (totalCost > totalGas) return -1;

  let tank = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      tank = 0;
      start = i + 1;
    }
  }
  return start;
};
