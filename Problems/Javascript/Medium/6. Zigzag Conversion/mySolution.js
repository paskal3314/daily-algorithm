/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const map = new Array(numRows).fill(null).map((el) => []);
  let xPos = 0;
  let yPos = 0;
  let yDirection = true;
  for (const char of s) {
    map[yPos][xPos] = char;
    if (yDirection) {
      if (yPos === numRows - 1) {
        yPos--;
        xPos++;
        yDirection = false;
      } else {
        yPos++;
      }
    } else {
      if (yPos === 0) {
        yPos++;
        yDirection = true;
      } else {
        yPos--;
        xPos++;
      }
    }
  }
  let result = "";
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j]) {
        result += map[i][j];
      }
    }
  }
  return result;
};
