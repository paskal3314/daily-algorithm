function knapsack(weights, values, cap) {
  const map = weights.map((weight, index) => ({
    weight: weight,
    value: values[index],
  }));
  map.sort((a, b) => a.weight - b.weight);

  let maxValue = 0;
  for (let i = 0; i < map.length; i++) {
    let currWeight = 0;
    let currValue = 0;
    for (let j = i; j < map.length; j++) {
      currWeight += map[j].weight;
      currValue += map[j].value;
      if (currWeight > cap) {
        break;
      } else {
        maxValue = Math.max(maxValue, currValue);
      }
    }
  }

  return maxValue;
}

// debug your code below
console.log("[1]", knapsack([10, 20, 30], [60, 100, 120], 50));
console.log("[2]", knapsack([1, 1, 1], [10, 20, 30], 2));
console.log("[3]", knapsack([4, 2, 3], [10, 20, 15], 5));
console.log("[4]", knapsack([4, 5, 1], [1, 2, 3], 4));
