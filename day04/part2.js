const validateYear = (val, min, max) => val.match(/^\d{4}$/) && +val >= min && +val <= max;
const validateHeight = val => {
  let m = /^(\d+)(in|cm)$/.exec(val);
  return m && ((m[2] == 'cm' && +m[1] >= 150 && +m[1] <= 193) || (m[2] == 'in' && +m[1] >= 59 && +m[1] <= 76));
}

const validate = p =>
  ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].every(c => p[c]) &&
  ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(p.ecl) &&
  validateYear(p.byr, 1920, 2002) &&
  validateYear(p.iyr, 2010, 2020) &&
  validateYear(p.eyr, 2020, 2030) &&
  validateHeight(p.hgt) &&
  p.hcl.match(/^#[0-9a-f]{6}$/) &&
  p.pid.match(/^\d{9}$/);

module.exports = input =>
  input.split(/\r?\n\r?\n/)
    .map(p =>
      p.split(/[\s\n]/)
        .map(x => x.split(':'))
        .reduce((pass, [key, val]) => Object.defineProperty(pass, key, { value: val }), {}))
    .filter(p => validate(p))
    .length;
