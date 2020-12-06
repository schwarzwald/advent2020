module.exports = input =>
  input.split(/\r?\n\r?\n/)
    .map(g => new Set([...g.replace(/[^\w]/g, '')]).size)
    .reduce((sum, c) => sum + c, 0);
