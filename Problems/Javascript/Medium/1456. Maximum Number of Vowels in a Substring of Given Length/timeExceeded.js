/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let result = 0;
  const vowels = { a: true, e: true, i: true, o: true, u: true };
  for (let i = 0; i <= s.length - k; i++) {
    let numOfVowels = 0;
    for (let j = i; j < i + k; j++) {
      if (vowels[s[j]]) {
        numOfVowels++;
      }
    }
    if (numOfVowels === k) {
      return numOfVowels;
    }
    result = Math.max(result, numOfVowels);
  }
  return result;
};
