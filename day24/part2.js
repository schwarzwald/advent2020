module.exports = input => {
  const dirs = ['nw', 'w', 'sw', 'se', 'e', 'ne'];
  const tileId = (x, y) => `${x}#${y}`;

  const move = (x, y, dir) => {
    switch (dirs[dir]) {
      case 'e': return [x + 1, y];
      case 'w': return [x - 1, y];

      case 'ne': return [x, y + 1];
      case 'sw': return [x, y - 1];

      case 'nw': return [x - 1, y + 1];
      case 'se': return [x + 1, y - 1];
    }
  }

  let tiles = new Map();
  tiles.set(tileId(0, 0), [0, 0, false]);

  for (let line of input.split('\n').map(l => l.trim())) {
    let [x, y] = [0, 0];

    while (line.length) {
      for (let i = 0; i < dirs.length; i++) {
        if (line.startsWith(dirs[i])) {
          line = line.substring(dirs[i].length);
          [x, y] = move(x, y, i);
          break;
        }
      }
    }

    let id = tileId(x, y);
    tiles.set(id, [x, y, !(tiles.has(id) && tiles.get(id)[2])]);
  }

  for (let i = 0; i < 100; i++) {
    let map = new Map();

    for (let [id, [x, y, type]] of tiles.entries()) {
      if (!map.has(id)) {
        map.set(id, [x, y, 0]);
      }

      if (!type) {
        continue;
      }

      for (let d = 0; d < dirs.length; d++) {
        let [x1, y1] = move(x, y, d);
        let id2 = tileId(x1, y1);

        if (!map.has(id2)) {
          map.set(id2, [x1, y1, 0]);
        }
        map.get(id2)[2]++;
      }
    }

    for (let [did, [x, y, count]] of map.entries()) {
      if (!tiles.has(did)) {
        tiles.set(did, [x, y, false]);
      }

      if (tiles.get(did)[2]) {
        tiles.get(did)[2] = count != 0 && count <= 2;
      } else {
        tiles.get(did)[2] = count == 2;
      }
    }
  }

  return [...tiles.values()].filter(t => t[2]).length;
}
