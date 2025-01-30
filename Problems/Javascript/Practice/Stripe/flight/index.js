// Question 1

// Given an input string: "UK:US:FedEx:4,UK:FR:Jet1:2,US:UK:RyanAir:8,CA:UK:CanadaAir:8" Which represents flights between destinations in the format: "Source:Destination:Airline:Cost,..." Write a function which will take a Source and Destination and output the cost.

// Answer question
// Question 2

// (Building from the first question) Write a function which will take an Input String, Source and Destination that have no direct connecting flight, and output a route that you can take to reach the destination. The output should be in the format: return {'route': 'US -> UK -> FR', 'method': 'RyanAir -> Jet1', 'cost': 10}

function findMultiStopFlights(input) {
  const flights = input.split(",");
  const graph = {};

  // Step 1: Build adjacency list
  for (const flight of flights) {
    const [source, destination, airline, cost] = flight.split(":");
    if (!graph[source]) graph[source] = [];
    graph[source].push({ destination, airline, cost: parseInt(cost, 10) });
  }

  const results = [];

  // Step 2: DFS to find all indirect routes
  function dfs(current, path, airlines, totalCost, visited) {
    if (path.length > 2) {
      // Ensure at least one stop before destination
      const fullRoute = path.join(" -> ");
      const fullMethod = airlines.join(" -> ");
      results.push({ route: fullRoute, method: fullMethod, cost: totalCost });
    }

    if (!graph[current]) return;

    for (const { destination, airline, cost } of graph[current]) {
      if (visited.has(destination)) continue; // Avoid cycles

      visited.add(destination);
      dfs(destination, [...path, destination], [...airlines, airline], totalCost + cost, visited);
      visited.delete(destination); // Backtrack
    }
  }

  // Step 3: Explore routes from every airport, avoiding direct flight shortcuts
  for (const src in graph) {
    for (const { destination: directDest } of graph[src]) {
      const visited = new Set([src]);
      dfs(directDest, [src, directDest], [], 0, visited);
    }
  }

  return results;
}

// Example input
const input = "UK:US:FedEx:4,UK:FR:Jet1:2,US:UK:RyanAir:8,CA:UK:CanadaAir:8,US:FR:DHL:6,FR:KR:KoreanAir:9";
console.log(findMultiStopFlights(input));
