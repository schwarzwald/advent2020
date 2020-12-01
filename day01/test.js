const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 01: Part 1', () => {
  it('Returns product of 2 lines which sum up to 2020', () => {
    expect(part1(`1721
    979
    366
    299
    675
    1456`)).to.equal(514579);
  })
});
describe('Day 01: Part 2', () => {
  it('Returns product of 3 lines which sum up to 2020', () => {
    expect(part2(`1721
    979
    366
    299
    675
    1456`)).to.equal(241861950);
  })
});
