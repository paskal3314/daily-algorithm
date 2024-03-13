/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => a - b);
  let result = citations.includes(0) ? 0 : 1;
  for (let i = citations.length - 1; i >= 0; i--) {
    if (citations.length - i >= citations[i]) {
      result = Math.max(citations[i], result);
    }
  }
  return result;
};
