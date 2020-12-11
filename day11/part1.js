module.exports = input => {
  const directions = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];

  let grid = input.split('\n').map(s => s.trim());
  let changed = false;

  do {
    let copy = [];
    changed = false;

    for (let y = 0; y < grid.length; y++) {
      let row = '';
      for (let x = 0; x < grid[y].length; x++) {
        if (grid[y][x] == '.') {
          row += '.';
          continue;
        }

        let count = 0;

        for ([dx, dy] of directions) {
          if (grid[y + dy] && grid[y + dy][x + dx] == '#') {
            count++;
          }
        }

        if (grid[y][x] == 'L' && count == 0) {
          row += '#';
          changed = true;
          continue;
        }

        if (grid[y][x] == '#' && count >= 4) {
          row += 'L';
          changed = true;
          continue;
        }

        row += grid[y][x];
      }
      copy.push(row);
    }
    grid = copy;
  } while (changed);

  return grid.reduce((count, row) => [...row].filter(c => c == '#').length + count, 0);
}
