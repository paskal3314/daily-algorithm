/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let n = grid.length;
  let m = grid[0].length;
  let queue = [];
  let oranges = 0;
  let time = 0;

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (grid[y][x] === 1) oranges++;
      else if (grid[y][x] === 2) queue.push([y, x, 0]);
    }
  }

  while (queue.length && oranges) {
    const [y, x, minutes] = queue.shift();

    if (grid[y][x] === 1) {
      grid[y][x] = 2;
      oranges--;
      time = minutes;
    }

    let newY = y - 1;
    let newX = x;
    if (newY >= 0 && newX >= 0 && newY < n && newX < m && grid[newY][newX] === 1) {
      queue.push([newY, newX, minutes + 1]);
    }
    newY = y + 1;
    newX = x;
    if (newY >= 0 && newX >= 0 && newY < n && newX < m && grid[newY][newX] === 1) {
      queue.push([newY, newX, minutes + 1]);
    }
    newY = y;
    newX = x - 1;
    if (newY >= 0 && newX >= 0 && newY < n && newX < m && grid[newY][newX] === 1) {
      queue.push([newY, newX, minutes + 1]);
    }
    newY = y;
    newX = x + 1;
    if (newY >= 0 && newX >= 0 && newY < n && newX < m && grid[newY][newX] === 1) {
      queue.push([newY, newX, minutes + 1]);
    }
  }

  return oranges ? -1 : time;
};
