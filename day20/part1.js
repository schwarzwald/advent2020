class Tile {

  constructor(str) {
    let rows = str.split('\n');
    this.id = +rows[0].match(/Tile (\d+)/)[1];
    this.grid = rows.slice(1).map(r => r.trim());
    this.edges = new Map();
  }

  getEdge(t) {
    if (!this.edges.get(t)) {
      if (t == 0) {
        this.edges.set(t, this.grid[0]);
      }
      if (t == 1) {
        this.edges.set(t, this.grid.map(r => r[r.length - 1]).join(''));
      }
      if (t == 2) {
        this.edges.set(t, this.grid.map(r => r[0]).join(''));
      }
      if (t == 3) {
        this.edges.set(t, this.grid[this.grid.length - 1]);
      }
    }

    return this.edges.get(t);
  }

  match(tile) {
    for (let i = 0; i < 4; i++) {
      let edge = this.getEdge(i);
      for (let j = 0; j < 4; j++) {
        let edge2 = tile.getEdge(j);
        if (edge == edge2 || edge == edge2.split('').reverse().join('')) {
          return true;
        }
      }
    }
    return false;
  }
}
module.exports = input => {
  let tiles = input.split(/\r?\n\r?\n/).map(r => new Tile(r));

  let product = 1;

  for (let i = 0; i < tiles.length; i++) {
    let count = 0;
    for (let j = 0; j < tiles.length; j++) {
      if (i == j) {
        continue;
      }

      if (tiles[i].match(tiles[j])) {
        count++;
      }
    }

    if (count == 2) {
      product *= tiles[i].id;
    }
  }

  return product;
}
