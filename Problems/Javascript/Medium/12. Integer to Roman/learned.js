/**
 * @param {number} num
 * @return {string}
 */

const map = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
};
var intToRoman = function (num) {
  let result = "";
  const numbers = Object.keys(map)
    .map((el) => parseInt(el))
    .sort((a, b) => b - a);

  for (const number of numbers) {
    while (num >= number) {
      result += map[number];
      num -= number;
    }
  }
  return result;
};
