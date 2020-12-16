module.exports = input => {
  let [rules, tickets, nearby] = input.split(/\r?\n\r?\n/);

  rules = rules.split('\n')
    .map(r => r.match(/: (\d+)-(\d+) or (\d+)-(\d+)/))
    .map(([_, min1, max1, min2, max2]) => [+min1, +max1, +min2, +max2]);

  return nearby.split('\n')
    .slice(1)
    .map(t => t.split(',')
      .map(Number)
      .filter(x => !rules.some(rule => (rule[0] <= x && rule[1] >= x) || (rule[2] <= x && rule[3] >= x)))
      .reduce((a, b) => a + b, 0))
    .reduce((a, b) => a + b, 0);
}
