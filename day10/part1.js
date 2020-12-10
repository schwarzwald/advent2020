module.exports = input =>
  input.split('\n')
    .map(Number)
    .sort((a, b) => a - b)
    .reduce(([ones, threes], curr, i, arr) => {
      switch (curr - (i == 0 ? 0 : arr[i - 1])) {
        case 1: return [ones + 1, threes];
        case 3: return [ones, threes + 1];
        default: return [ones, threes];
      }
    }, [0, 1])
    .reduce((prod, a) => prod * a);