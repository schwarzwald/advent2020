module.exports = input => {
  const pattern = input.split('\n').map(s => s.trim());
  const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

  let result = 1;

  for ([dx, dy] of slopes) {
    let count = 0;

    let x = 0;
    for (let y = 0; y < pattern.length; y += dy) {
      let row = pattern[y];

      if (row[x % row.length] == '#') {
        count++;
      }

      x += dx;
    }

    result *= count;
  }

  return result;
}
