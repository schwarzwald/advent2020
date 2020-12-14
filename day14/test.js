const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 14: Part 1', () => {
  it('Sums entries after applying mask', () => {
    expect(part1(`mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`)).to.equal(165n);
  })
});
describe('Day 14: Part 2', () => {
  it('Sums entries after applying mask as address decoder ', () => {
    expect(part2(`mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1`)).to.equal(208n);
  })
});
