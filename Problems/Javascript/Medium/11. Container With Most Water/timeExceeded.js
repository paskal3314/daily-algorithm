/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = 1; j < height.length; j++) {
      const smallest = Math.min(height[i], height[j]);
      max = Math.max(max, (j - i) * smallest);
      console.log(max);
    }
  }
  return max;
};
