/**
 * Beats 22.51%
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const graph = {};
  for (let i = 0; i < equations.length; i++) {
    const [numerator, denominator] = equations[i];

    // initialization
    if (!graph[numerator]) {
      graph[numerator] = {};
    }
    if (!graph[denominator]) {
      graph[denominator] = {};
    }

    graph[numerator][denominator] = values[i];
    graph[denominator][numerator] = 1 / values[i];
  }

  const result = [];
  for (let i = 0; i < queries.length; i++) {
    const history = new Set();
    const [numerator, denominator] = queries[i];
    const value = traverse(graph, numerator, denominator, history);
    result.push(value);
  }
  return result;
};

function traverse(graph, numerator, denominator, history) {
  if (!graph[numerator] || !graph[denominator]) {
    return -1.0;
  } else if (numerator === denominator) {
    return 1.0;
  }

  history.add(numerator);
  const reference = graph[numerator];
  for (const refDenominator in reference) {
    if (!history.has(refDenominator)) {
      const value = traverse(graph, refDenominator, denominator, history);
      if (value !== -1.0) {
        return value * reference[refDenominator];
      }
    }
  }
  return -1.0;
}
