module.exports = input =>
  [...input.split('\n')
    .map(Number)
    .sort((a, b) => b - a), 0]
    .reduce((map, curr) => map.set(curr,
      ((map.get(curr + 1) || 0) +
        (map.get(curr + 2) || 0) +
        (map.get(curr + 3) || 0)) || 1),
      new Map())
    .get(0);