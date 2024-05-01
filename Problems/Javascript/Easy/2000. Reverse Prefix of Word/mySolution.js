/**
 * Beats 51%
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  const index = word.indexOf(ch);
  if (index === -1) {
    return word;
  }

  let left = 0;
  let right = index;
  const arr = word.split("");
  while (right > left) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join("");
};
