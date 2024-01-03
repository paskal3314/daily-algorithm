/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  let result = 0;
  let prevRowCount = 0;
  for (let i = 0; i < bank.length; i++) {
    const currRowCount = getNumOfLaser(bank[i]);
    if (currRowCount === 0) {
      continue;
    }
    result += currRowCount * prevRowCount;
    prevRowCount = currRowCount;
  }
  return result;
};

function getNumOfLaser(str) {
  return str.split("").reduce((count, char) => count + parseInt(char), 0);
}

function run() {
  const run1 = numberOfBeams(["011001", "000000", "010100", "001000"]);
  const run2 = numberOfBeams(["000", "111", "000"]);

  console.log("Result:", {
    run1: {
      expected: 8,
      result: run1,
    },
    run2: {
      expected: 0,
      result: run2,
    },
  });
}

run();
