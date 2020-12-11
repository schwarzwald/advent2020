const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 11: Part 1', () => {
  it('Count how many seats are occupied after stabilization', () => {
    expect(part1(`L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`)).to.equal(37);
  })
});
describe('Day 11: Part 2', () => {
  it('Count how many seats are occupied after stabilization counting only visible seats', () => {
    expect(part2(`L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`)).to.equal(26);
  })
});
