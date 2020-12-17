const id = (x, y, z) => `${x}#${y}#${z}`;

module.exports = input => {
  let active = [];

  input.split('\n').forEach((r, y) =>
    [...r].forEach((v, x) => {
      if (v == '#') {
        active.push(id(x, y, 0));
      }
    }));

  for (let i = 0; i < 6; i++) {
    active = [...active.reduce((states, xyz) => {
      let [x, y, z] = xyz.split('#').map(Number);

      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          for (let dz = -1; dz <= 1; dz++) {
            if (dx || dy || dz) {
              let neighbour = id(x + dx, y + dy, z + dz);
              let [state, count] = states.get(neighbour) || [false, 0];
              states.set(neighbour, [state, count + 1]);
            }
          }
        }
      }
      return states;
    }, active.reduce((map, xyz) => map.set(xyz, [true, 0]), new Map()))]
      .filter(([, [state, count]]) => (state && count == 2) || count == 3)
      .map(([xyz]) => xyz);
  }

  return active.length;
}
