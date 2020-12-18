const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 18: Part 1', () => {
  it('Calculates sum of all expresions', () => {
    expect(part1(`2 * 3 + (4 * 5)
5 + (8 * 3 + 9 + 3 * 4 * 3)`)).equal(463)

    expect(part1(`5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))`)).to.equal(12240)
    expect(part1(`((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2`)).to.equal(13632);
  });
});
describe('Day 18: Part 2', () => {
  it('Calculates sum of all expresions but additinon has precedence', () => {
    expect(part2(`2 * 3 + (4 * 5)
5 + (8 * 3 + 9 + 3 * 4 * 3)`)).equal(1491)

    expect(part2(`5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))`)).to.equal(669060)
    expect(part2(`((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2`)).to.equal(23340);
    expect(part2(`((6 * 9) * (5 * 4) + 6) + 2`)).to.equal(1406);
  });
});