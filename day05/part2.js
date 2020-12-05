module.exports = input => {
  const ids = input.split('\n')
    .map(p => parseInt(p.replace(/./g, b => b == 'B' || b == 'R' ? '1' : '0'), 2))
    .sort((a, b) => a - b);

  for (let i = 0; i < ids.length; i++) {
    if (ids[i + 1] - ids[i] > 1) {
      return ids[i] + 1;
    }
  }
}
