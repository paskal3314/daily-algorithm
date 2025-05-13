/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function (security, time) {
  const hash = [0];

  let stack = 0;
  for (let i = 1; i < security.length; i++) {
    if (security[i - 1] >= security[i]) {
      hash[i] = ++stack;
    } else {
      hash[i] = stack = 0;
    }
  }

  hash[hash.length - 1] = 0;
  stack = 0;
  for (let i = security.length - 2; i >= 0; i--) {
    if (security[i + 1] >= security[i]) {
      hash[i] = Math.min(hash[i], ++stack);
    } else {
      hash[i] = stack = 0;
    }
  }

  const ans = [];
  for (let i = 0; i < hash.length; i++) {
    if (hash[i] >= time) {
      ans.push(i);
    }
  }
  return ans;
};
