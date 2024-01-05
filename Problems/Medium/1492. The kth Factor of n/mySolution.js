/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
  let factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
    if (factors.length === k) {
      return factors[k - 1];
    }
  }
  return -1;
};

function run() {
  const run1 = kthFactor(12, 3);
  const run2 = kthFactor(7, 2);
  const run3 = kthFactor(4, 4);

  console.log("Result:", {
    run1: {
      expected: 3,
      result: run1,
    },
    run2: {
      expected: 7,
      result: run2,
    },
    run3: {
      expected: -1,
      result: run3,
    },
  });
}

run();
