/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board[0].length;
  const n = board.length;
  let visited = new Array(n).fill(null).map((el) => new Array(m).fill(false));
  function traverse(word, x, y) {
    // console.log("[T]", word, x, y)
    if (word.length === 0) return true;
    if (x < 0 || y < 0 || x >= n || y >= m) {
      return false;
    }
    if (visited[x][y] === true) {
      return false;
    }
    if (board[x][y] === word[0]) {
      visited[x][y] = true;
      const left = traverse(word.slice(1), x, y - 1);
      const right = traverse(word.slice(1), x, y + 1);
      const up = traverse(word.slice(1), x + 1, y);
      const down = traverse(word.slice(1), x - 1, y);
      const result = left || right || up || down;
      visited[x][y] = false;
      return result;
    }
    return false;
  }
  function clearVisited() {
    visited = visited.map((arr) => arr.map((el) => false));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const result = traverse(word, i, j);
      clearVisited();
      if (result === true) {
        return true;
      }
    }
  }
  return false;
};
