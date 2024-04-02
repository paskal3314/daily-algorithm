/**
 * Beats 53%
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!map[char]) {
      map[char] = t[i];
    } else if (map[char] !== t[i]) {
      return false;
    }
  }
  const valueCheckMap = {};
  for (const val of Object.values(map)) {
    if (!valueCheckMap[val]) {
      valueCheckMap[val] = 1;
    } else {
      return false;
    }
  }
  return true;
};
