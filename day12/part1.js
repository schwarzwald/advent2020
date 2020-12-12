module.exports = input => {
  const dirs = {
    N: [0, 1],
    S: [0, -1],
    E: [1, 0],
    W: [-1, 0]
  }
  const navs = input.split('\n')
    .map(r => /(\w)(\d+)/.exec(r))
    .map(([_, a, b]) => [a, +b]);

  let pos = [0, 0];
  let dir = [1, 0];

  for ([d, v] of navs) {
    if (d == 'F') {
      pos[0] += dir[0] * v;
      pos[1] += dir[1] * v;
      continue;
    }

    if (dirs[d]) {
      pos[0] += dirs[d][0] * v;
      pos[1] += dirs[d][1] * v;
      continue;
    }

    let flip = d == 'L' ? -1 : 1;
    switch (v) {
      case 90:
        dir = [flip * dir[1], -flip * dir[0]];
        break;
      case 180:
        dir = [-dir[0], -dir[1]];
        break;
      case 270:
        dir = [-flip * dir[1], flip * dir[0]];
        break;
    }
  }

  return Math.abs(pos[0]) + Math.abs(pos[1]);
}
