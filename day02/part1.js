module.exports = input =>
  input.split('\n')
    .map(l => /(\d+)-(\d+) (\w): (\w+)/.exec(l))
    .map(([_, low, high, char, password]) => [+low, +high, password.split(char).length - 1])
    .filter(([low, high, count]) => count >= low && count <= high)
    .length;