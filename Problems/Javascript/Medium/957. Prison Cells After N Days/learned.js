/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, n) {
  let prison = cells.join("");
  let history = [];
  while (n--) {
    prison = nextDay(prison);
    let lookup = history.indexOf(prison);
    if (lookup > -1) {
      let mod = n % (history.length - lookup);
      return history[lookup + mod].split("");
    } else {
      history.push(prison);
    }
  }
  return prison.split("");
};
function nextDay(cells) {
  let newPrison = "";
  for (let i = 0; i < cells.length; i++) {
    if (cells[i - 1] === cells[i + 1]) {
      newPrison += "1";
    } else {
      newPrison += "0";
    }
  }
  return newPrison;
}
