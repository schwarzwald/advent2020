module.exports = input => {
  const dirs = ['nw', 'w', 'sw', 'se', 'e', 'ne'];
  const id = (x, y) => `${x}#${y}`;

  let tiles = new Map();
  tiles.set(id(0, 0), false);

  for (let line of input.split('\n')) {
    let [x, y] = [0, 0];

    line = line.trim();
    while (line.length) {
      let i = 0;
      for (; i < dirs.length; i++) {
        if (line.startsWith(dirs[i])) {
          line = line.substring(dirs[i].length);
          break;
        }
      }

      switch (dirs[i]) {
        case 'e': x += 1; break;
        case 'w': x -= 1; break;

        case 'ne': y += 1; break;
        case 'sw': y -= 1; break;

        case 'nw': y += 1; x -= 1; break;
        case 'se': y -= 1; x += 1; break;
      }
    }

    tiles.set(id(x, y), !(tiles.get(id(x, y) || false)));
  }

  return [...tiles.values()].filter(t => t).length;
}
