/**
 * @param {number[]} nums
 * @return {number}
 * Beats 24.43%
 */
var findShortestSubArray = function (nums) {
  let degree = 0;
  const arr = [];
  for (const num of nums) {
    if (arr[num]) {
      arr[num] += 1;
    } else {
      arr[num] = 1;
    }
  }

  const list = [];
  let result = nums.length;
  for (let i = 0; i < arr.length; i++) {
    if (degree < arr[i]) {
      degree = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (degree === arr[i]) {
      list.push(i);
    }
  }

  for (const targetNum of list) {
    let minIdx = -1;
    let maxIdx = nums.length;
    for (let i = 0; i < nums.length && minIdx === -1; i++) {
      if (nums[i] === targetNum) {
        minIdx = i;
      }
    }
    for (let i = nums.length - 1; i >= minIdx && maxIdx === nums.length; i--) {
      if (nums[i] === targetNum) {
        maxIdx = i;
      }
    }

    if (maxIdx - minIdx + 1 < result) {
      result = maxIdx - minIdx + 1;
    }
  }

  return result;
};

function run() {
  const run1 = findShortestSubArray([1, 2, 2, 3, 1]);
  const run2 = findShortestSubArray([1, 2, 2, 3, 1, 4, 2]);

  console.log("Result:", {
    run1: {
      expected: 2,
      result: run1,
    },
    run2: {
      expected: 6,
      result: run2,
    },
  });
}

run();
