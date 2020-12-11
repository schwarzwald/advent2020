module.exports = input => {
  let grid = input.split('\n').map(s => [...s.trim()]);

  const directions = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
  let changed = false;
  do {
    changed = false;
    let copy = grid.map((r, y) =>
      r.map((c, x) => {
        if (c == '.') {
          return c;
        }

        let count = 0;

        for ([dx, dy] of directions) {
          let xx = x;
          let yy = y;
          do {
            xx += dx;
            yy += dy;
            if (grid[yy] && grid[yy][xx] != '.') {
              if (grid[yy] && grid[yy][xx] == '#') {
                count++;
              }
              break;
            }
          } while (grid[yy] && grid[yy][xx]);
        }

        if (c == 'L' && count == 0) {
          changed = true;
          return '#';
        }

        if (c == '#' && count >= 5) {
          changed = true;
          return 'L';
        }

        return c;
      })
    );
    grid = copy;
  } while (changed);

  return grid.reduce((count, row) => row.filter(c => c == '#').length + count, 0);
}
