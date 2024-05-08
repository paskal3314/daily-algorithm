/**
 * Beats 38%
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const copy = [...score];
  copy.sort((a, b) => a - b);
  for (let i = 0; i < copy.length; i++) {
    let rank;
    if (i === copy.length - 3) {
      rank = "Bronze Medal";
    } else if (i === copy.length - 2) {
      rank = "Silver Medal";
    } else if (i === copy.length - 1) {
      rank = "Gold Medal";
    } else {
      rank = String(copy.length - i);
    }
    score[score.indexOf(copy[i])] = rank;
  }
  return score;
};
