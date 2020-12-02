module.exports = input =>
  input.split('\n')
    .map(l => /(\d+)-(\d+) (\w): (\w+)/.exec(l))
    .filter(([_, low, high, char, password]) => (password[+low - 1] == char) ^ (password[+high - 1] == char))
    .length;