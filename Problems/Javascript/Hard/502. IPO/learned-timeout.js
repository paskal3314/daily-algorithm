/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  let finishedProjects = new Array(capital.length).fill(false);

  for (let i = 0; i < k; i++) {
    let index = -1;
    let value = -1;
    for (let j = 0; j < capital.length; j++) {
      if (!finishedProjects[j] && capital[j] <= w && profits[j] > value) {
        index = j;
        value = profits[j];
      }
    }
    if (index === -1) {
      return w;
    } else {
      w += value;
      finishedProjects[index] = true;
    }
  }
  return w;
};
