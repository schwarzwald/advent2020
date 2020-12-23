module.exports = input => {
  let cups = input.split('').map(Number);
  let max = Math.max(...cups);
  let current = 0;

  for (let i = 0; i < 100; i++) {
    let val = cups[current];
    let next = val - 1;
    let removed = [];
    for (j = 0; j < 3; j++) {
      removed.push(cups.splice((current + 1) % cups.length, 1)[0]);
      current = cups.indexOf(val);
    }

    let nextIndex = -1
    while (nextIndex == -1) {
      nextIndex = cups.indexOf(next);
      next--;
      if (next < 0) {
        next = max;
      }
    }

    cups.splice((nextIndex + 1) % cups.length, 0, ...removed);
    current = (cups.indexOf(val) + 1) % cups.length;
  }

  let one = cups.indexOf(1);
  return [...cups.slice(one + 1), ...cups.slice(0, one)].join('')
}
