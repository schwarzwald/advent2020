class Tile {

  constructor(str) {
    let rows = str.split('\n');
    this.id = +rows[0].match(/Tile (\d+)/)[1];
    this.rot = 0;
    this.grid = rows.slice(1).map(r => r.trim());
    this.grids = new Map();
    this.grids.set(0, this.grid);
    this.neighbours = new Map();
  }

  getEdge(t) {
    if (t == 0) {
      return this.grid[0];
    }
    if (t == 1) {
      return this.grid.map(r => r[r.length - 1]).join('');
    }
    if (t == 2) {
      return this.grid[this.grid.length - 1];
    }
    if (t == 3) {
      return this.grid.map(r => r[0]).join('');
    }
  }

  addNeighbour(tile, edge) {
    this.neighbours.set(edge, tile);
    tile.neighbours.set((edge + 2) % 4, this);
  }

  getNeighbour(edge) {
    return this.neighbours.get(edge);
  }

  rotate90() {
    this.rot = (this.rot + 1) % 4;

    if (!this.grids.get(this.rot)) {
      let grid = [];
      for (let i = 0; i < this.grid.length; i++) {
        for (let j = 0; j < this.grid.length; j++) {
          grid[j] = this.grid[i][j] + (grid[j] || '');
        }
      }
      this.grids.set(this.rot, grid);
    }

    this.grid = this.grids.get(this.rot);
  }

  flip() {
    this.grid = this.grid.map(r => r.split('').reverse().join(''));
    this.grids.clear();
    this.grids.set(this.rot, this.grid);
  }

  match(tile) {
    for (let f = 0; f < 2; f++) {
      for (let i = 0; i < 4; i++) {
        let edge = this.getEdge(i);

        for (let j = 0; j < 4; j++) {
          if (edge == tile.getEdge((i + 2) % 4)) {
            return i
          }
          tile.rotate90();
        }
      }
      tile.flip();
    }
  }
}

const match = (row, start, pattern) => {
  for (let i of pattern) {
    if (row[start + i] != '#') {
      return false;
    }
  }
  return true;
}

const replace = (row, start, pattern) => {
  row = [...row];
  for (let i of pattern) {
    row[start + i] = 'O';
  }
  return row.join('');
}

module.exports = input => {
  const monster = [[18], [0, 5, 6, 11, 12, 17, 18, 19], [1, 4, 7, 10, 13, 16]];

  let tiles = input.split(/\r?\n\r?\n/).map(r => new Tile(r));

  let queue = [tiles[0]];
  let visited = new Set();

  while (queue.length) {
    let tile = queue.shift();

    if (visited.has(tile.id)) {
      continue;
    }

    visited.add(tile.id);

    for (let other of tiles) {
      if (visited.has(other.id)) {
        continue;
      }

      let dir = tile.match(other);
      if (dir != null) {
        queue.push(other);
        tile.addNeighbour(other, dir);
      }
    }
  }

  let tile = tiles[0]
  while (tile.getNeighbour(0) || tile.getNeighbour(3)) {
    tile = tile.getNeighbour(0) || tile.getNeighbour(3);
  }

  let large = new Array(Math.sqrt(tiles.length) * (tile.grid.length - 2));
  large.fill('');

  let i = 0;
  while (tile) {
    let row = tile;

    while (row) {
      for (let j = 1; j < row.grid.length - 1; j++) {
        large[i + j - 1] += row.grid[j].substring(1, row.grid[j].length - 1);
      }

      row = row.neighbours.get(1);
    }
    i += tile.grid.length - 2;
    tile = tile.neighbours.get(2);
  }

  let largeTile = new Tile('Tile 0:\n' + large.join('\n'));

  for (let f = 0; f < 2; f++) {
    for (let r = 0; r < 4; r++) {
      let grid = largeTile.grid;
      let matched = false;

      for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 0; j < grid[i].length - 20; j++) {
          if (match(grid[i], j, monster[1]) &&
            match(grid[i + 1], j, monster[2]) &&
            match(grid[i - 1], j, monster[0])) {
            matched = true;
            grid[i - 1] = replace(grid[i - 1], j, monster[0]);
            grid[i] = replace(grid[i], j, monster[1]);
            grid[i + 1] = replace(grid[i + 1], j, monster[2]);
          }
        }
      }
      if (matched) {
        return grid.map(r => [...r].filter(r => r == '#').length).reduce((a, b) => a + b);
      }
      largeTile.rotate90();
    }
    largeTile.flip();
  }
}
