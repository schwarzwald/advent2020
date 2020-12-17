const id = (x, y, z, w) => `${x}#${y}#${z}#${w}`;

module.exports = input => {
  let active = [];

  input.split('\n').forEach((r, y) => {
    [...r].forEach((v, x) => {
      if (v == '#') {
        active.push(id(x, y, 0, 0));
      }
    });
  });

  for (let i = 0; i < 6; i++) {
    active = [...active.reduce((states, xyzw) => {
      let [x, y, z, w] = xyzw.split('#').map(Number);

      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          for (let dz = -1; dz <= 1; dz++) {
            for (let dw = -1; dw <= 1; dw++) {
              if (dx || dy || dz || dw) {
                let neighbour = id(x + dx, y + dy, z + dz, w + dw);
                let [state, count] = states.get(neighbour) || [false, 0];
                states.set(neighbour, [state, count + 1]);
              }
            }
          }
        }
      }
      return states;
    }, active.reduce((map, xyzw) => map.set(xyzw, [true, 0]), new Map()))]
      .filter(([, [state, count]]) => (state && count == 2) || count == 3)
      .map(([xyzw]) => xyzw);
  }

  return active.length;
}
