/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  let result = 0;
  for (let i = 0; i < bank.length; i++) {
    let iCount = getNumOfLaser(bank[i]);
    let rowLaserNum = 0;
    for (let j = i + 1; j < bank.length && rowLaserNum === 0; j++) {
      if (bank[j].includes("1")) {
        let jCount = getNumOfLaser(bank[j]);
        rowLaserNum = iCount * jCount;
      }
    }
    result += rowLaserNum;
  }
  return result;
};

function getNumOfLaser(str) {
  let numOf1 = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      numOf1++;
    }
  }
  return numOf1;
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
