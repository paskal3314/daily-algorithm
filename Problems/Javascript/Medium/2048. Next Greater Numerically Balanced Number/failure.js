/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function (n) {
  for (let i = 1; i <= 9; i++) {
    let arr = [];
    for (let j = 1; j <= i; j++) {
      arr.push(i);
    }

    if (n.toString().length <= arr.length) {
      const permutations = [];
      permutation([], arr, permutations);
      let min = -1;
      for (const permu of permutations) {
        const number = parseInt(permu.join(""));
        if (n < number) {
          if (min === -1 || number < min) {
            min = number;
          }
        }
      }
      if (min !== -1) {
        return min;
      }
    }
  }

  for (let i = 1; i <= 9; i++) {
    let arr = [];

    for (let j = 1; j <= i; j++) {
      for (let q = 1; q <= j; q++) {
        arr.push(j);
      }
    }
    if (n.toString().length <= arr.length) {
      const permutations = [];
      permutation([], arr, permutations);
      let min = -1;
      for (const permu of permutations) {
        const number = parseInt(permu.join(""));
        if (n < number) {
          if (min === -1 || number < min) {
            min = number;
          }
        }
      }
      if (min !== -1) {
        return min;
      }
    }
  }
};

const permutation = (permu, rests, output) => {
  if (rests.length == 0) {
    return output.push(permu);
  }
  rests.forEach((v, idx) => {
    const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
    permutation([...permu, v], rest, output);
  });
};
