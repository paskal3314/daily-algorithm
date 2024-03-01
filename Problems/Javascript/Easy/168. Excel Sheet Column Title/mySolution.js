/**
 * Beats 66%
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const arr = [];
  const charAcode = "A".charCodeAt();
  do {
    columnNumber--;
    const rest = columnNumber % 26;
    arr.push(String.fromCharCode(charAcode + rest));

    columnNumber = (columnNumber - rest) / 26;
  } while (columnNumber > 0);

  return arr.reverse().join("");
};
