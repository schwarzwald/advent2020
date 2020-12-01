module.exports = input => {
  const lines = input.split('\n').map(Number);

  for (let i = 0; i < lines.length - 2; i++) {
    for (let j = i + 1; j < lines.length - 1; j++) {
      for (let k = j + 1; k < lines.length; k++) {
        if (lines[i] + lines[j] + lines[k] == 2020) {
          return lines[i] * lines[j] * lines[k];
        }
      }
    }
  }
}
