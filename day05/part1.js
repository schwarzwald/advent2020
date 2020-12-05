module.exports = input =>
  Math.max(...input.split('\n')
    .map(p => parseInt(p.replace(/./g, b => b == 'B' || b == 'R' ? '1' : '0'), 2)))
