module.exports = input => {
  const pattern = input.split('\n').map(s => s.trim());

  let count = 0;
  let x = 0;

  for (let y = 0; y < pattern.length; y++) {
    let row = pattern[y];

    if (row[x % row.length] == '#') {
      count++;
    }

    x += 3;
  }

  return count;
}
