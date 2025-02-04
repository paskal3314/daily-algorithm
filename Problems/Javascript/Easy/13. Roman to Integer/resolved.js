/**
 * @param {string} s
 * @return {number}
 */

const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const char2Map = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};
var romanToInt = function (s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (["I", "X", "C"].includes(char) && char2Map[s[i] + s[i + 1]]) {
      total += char2Map[s[i] + s[i + 1]];
      i++;
    } else {
      total += map[char];
    }
  }
  return total;
};
