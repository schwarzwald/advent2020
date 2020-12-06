module.exports = input =>
  input.split(/\r?\n\r?\n/)
    .map(g => {
      let lines = g.split('\n').map(c => c.trim());
      return [...lines[0]].filter(c => lines.every(x => x.includes(c))).length;
    })
    .reduce((sum, c) => sum + c, 0);
