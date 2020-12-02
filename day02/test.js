const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 02: Part 1', () => {
  it('Returns number of correct passwords where the given letter is between first and second parameter', () => {
    expect(part1(`1-3 a: abcde
    1-3 b: cdefg
    2-9 c: ccccccccc`)).to.equal(2);
  });
});
describe('Day 02: Part 2', () => {
  it('Returns number of correct passwords where exactly one of the positions contains the given letter', () => {
    expect(part2(`1-3 a: abcde
    1-3 b: cdefg
    2-9 c: ccccccccc`)).to.equal(1);
  });
});
