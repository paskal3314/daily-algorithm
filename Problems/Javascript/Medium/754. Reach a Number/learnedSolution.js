/**
 *
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  target = Math.abs(target);
  let step = 0;
  while (target > 0) {
    step++;
    target -= step;
  }
  return target % 2 === 0 ? step : step + (step % 2) + 1;
};
