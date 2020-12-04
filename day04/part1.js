module.exports = input =>
  input.split(/\r?\n\r?\n/)
    .map(p =>
      p.split(/[\s\n]/)
        .map(x => x.split(':'))
        .reduce((pass, [key, val]) => Object.defineProperty(pass, key, { value: val }), {}))
    .filter(p => ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].every(c => p[c]))
    .length;