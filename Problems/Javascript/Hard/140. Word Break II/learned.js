/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const hash = new Map();

  function run(str) {
    if (hash.has(str)) return hash.get(str);
    if (!str.length) return [];

    let result = [];

    for (const word of wordDict) {
      if (str.startsWith(word)) {
        const nextStr = str.slice(word.length);
        const path = run(nextStr);

        if (!nextStr && !path.length) result.push(word);

        result.push(...path.map((p) => word + " " + p));
      }
    }
    hash.set(str, result);
    return result;
  }

  return run(s);
};
