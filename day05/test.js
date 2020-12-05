const expect = require('expect.js');
const part1 = require('./part1');

describe('Day 05: Part 1', () => {
  it('Calculates and finds the highest seat ID', () => {
    expect(part1('FBFBBFFRLR')).to.equal(357);
    expect(part1(`BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`)).to.equal(820);
  });
});