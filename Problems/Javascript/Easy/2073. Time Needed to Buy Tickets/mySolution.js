/**
 * Beats 63%
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let time = 0;
  let index = 0;
  while (tickets[k] > 0) {
    if (tickets[index] > 0) {
      tickets[index]--;
      time++;
    }
    if (index === tickets.length - 1) {
      index = 0;
    } else {
      index++;
    }
  }
  return time;
};
