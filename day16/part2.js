module.exports = input => {
  const isValid = (rule, x) => (rule[0] <= x && rule[1] >= x) || (rule[2] <= x && rule[3] >= x)

  let [rulesRaw, tickets, nearby] = input.split(/\r?\n\r?\n/);

  rules = rulesRaw.split('\n')
    .map(r => r.match(/: (\d+)-(\d+) or (\d+)-(\d+)/))
    .map(([_, min1, max1, min2, max2]) => [+min1, +max1, +min2, +max2]);

  tickets = tickets.split('\n')[1]
    .split(',')
    .map(Number);

  nearby = nearby.split('\n')
    .slice(1)
    .map(t => t.split(',')
      .map(Number))
    .filter(t => t.every(x => rules.some(rule => isValid(rule, x))));

  let names = rulesRaw.split('\n')
    .map(r => r.trim().split(':')[0]);

  let grid = [...Array(rules.length)].map(i => [...Array(rules.length)].map((j, ix) => ix));

  while (grid.some(r => r.length > 1)) {
    for (let i = 0; i < grid.length; i++) {
      if (grid[i].length > 1) {
        grid[i] = grid[i].filter(r => nearby.every(t => isValid(rules[r], t[i])));
      }
      if (grid[i].length == 1) {
        for (let j = 0; j < grid.length; j++) {
          if (j != i && grid[j].length > 1) {
            grid[j] = grid[j].filter(x => x != grid[i][0]);
          }
        }
      }
    }
  }

  return grid.map(i => names[i])
    .map((n, ix) => n.startsWith('departure') ? tickets[ix] : 1)
    .reduce((a, b) => a * b);
}
