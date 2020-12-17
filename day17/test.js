const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 17: Part 1', () => {
  it('Counts number of active cubes after 6 cycles', () => {
    expect(part1(`.#.
..#
###`)).to.equal(112);
  });
});
describe('Day 17: Part 2', () => {
  it('Counts number of active 4 dimensional cubes after 6 cycles', () => {
    expect(part2(`.#.
..#
###`)).to.equal(848);
  });
});
