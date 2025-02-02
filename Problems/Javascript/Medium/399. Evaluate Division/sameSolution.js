/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const graph = makeGraph(equations, values);

  const result = [];
  for (const [a, b] of queries) {
    result.push(traverseGraph(a, b, graph, new Set()));
  }
  return result;
};

function makeGraph(equations, values) {
  const graph = {};
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    if (!graph[a]) {
      graph[a] = {};
    }
    if (!graph[b]) {
      graph[b] = {};
    }
    if (!graph[a][b]) {
      graph[a][b] = values[i];
    }
    if (!graph[b][a]) {
      graph[b][a] = 1 / values[i];
    }
  }
  return graph;
}

function traverseGraph(a, b, graph, visited) {
  if (!graph[a] || !graph[b]) {
    return -1.0;
  } else if (a === b) {
    return 1.0;
  }

  visited.add(a);
  const layer2Graph = graph[a];
  for (const key in layer2Graph) {
    if (!visited.has(key)) {
      const value = traverseGraph(key, b, graph, visited);
      if (value !== -1.0) {
        return value * layer2Graph[key];
      }
    }
  }
  return -1;
}
