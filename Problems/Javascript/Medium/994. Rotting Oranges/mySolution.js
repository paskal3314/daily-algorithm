/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  let visited = new Map();
  const copy = JSON.parse(JSON.stringify(grid));

  function rot(y, x) {
    const key = `${y},${x}`;
    if (y < 0 || x < 0 || y >= n || x >= m || visited.has(key) || copy[y][x] === 0) return;

    visited.set(key, true);
    copy[y][x] = 2;

    const up = rot(y - 1, x);
    const down = rot(y + 1, x);
    const left = rot(y, x - 1);
    const right = rot(y, x + 1);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 2) {
        rot(i, j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (copy[i][j] === 1) {
        return -1;
      }
    }
  }

  let ans = 0;
  const map = {};

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const key = `${i},${j}`;
      map[key] = grid[i][j];
    }
  }

  while (Object.values(map).some((val) => val === 1)) {
    const coords = Object.keys(map).filter((key) => map[key] === 2);
    for (const coord of coords) {
      let [y, x] = coord.split(",");
      y = parseInt(y);
      x = parseInt(x);

      const upKey = `${y - 1},${x}`;
      if (map[upKey] === 1) map[upKey] = 2;
      const downKey = `${y + 1},${x}`;
      if (map[downKey] === 1) map[downKey] = 2;
      const leftKey = `${y},${x - 1}`;
      if (map[leftKey] === 1) map[leftKey] = 2;
      const rightKey = `${y},${x + 1}`;
      if (map[rightKey] === 1) map[rightKey] = 2;
    }

    ans++;
  }
  return ans;
};
