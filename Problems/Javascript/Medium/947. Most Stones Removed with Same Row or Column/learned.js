/**
 * DFS solution
 * Beats 84%
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  const rows = new Map();
  const cols = new Map();
  for (const [x, y] of stones) {
    rows.set(x, (rows.get(x) || new Set()).add(y));
    cols.set(y, (cols.get(y) || new Set()).add(x));
  }

  const visited = new Set();
  const visit = (x, y) => {
    const key = `${x}-${y}`;
    if (visited.has(key)) return;
    visited.add(key);
    const adjRow = rows.get(x);
    for (const col of adjRow) {
      visit(x, col);
    }
    const adjCol = cols.get(y);
    for (const row of adjCol) {
      visit(row, y);
    }
  };

  let remainingStones = 0;
  for (const [x, y] of stones) {
    const key = `${x}-${y}`;
    if (visited.has(key)) continue;
    visit(x, y);
    remainingStones++;
  }
  return stones.length - remainingStones;
};
