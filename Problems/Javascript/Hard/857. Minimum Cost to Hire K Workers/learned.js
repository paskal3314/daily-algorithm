/**
 * Beats 9%
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function (quality, wage, k) {
  const n = quality.length;
  let minCost = Number.MAX_VALUE;
  let qualityTillNow = 0;
  let workers = [];

  for (let i = 0; i < n; i++) {
    workers.push({
      ratio: wage[i] / quality[i],
      quality: quality[i],
    });
  }

  workers.sort((a, b) => a.ratio - b.ratio);

  let highQualityWorkers = [];

  for (const { ratio, quality } of workers) {
    qualityTillNow += quality;
    highQualityWorkers.push(-1 * quality);
    highQualityWorkers.sort((a, b) => a - b);

    if (highQualityWorkers.length > k) {
      qualityTillNow += highQualityWorkers.shift();
    }
    if (highQualityWorkers.length === k) {
      minCost = Math.min(minCost, qualityTillNow * ratio);
    }
  }

  return minCost;
};
