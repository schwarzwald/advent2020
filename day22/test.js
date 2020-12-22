const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 22: Part 1', () => {
  it('Counts score after the game ends', () => {
    expect(part1(`Player 1:
9
2
6
3
1

Player 2:
5
8
4
7
10`)).to.equal(306);
  })
});
describe('Day 22: Part 2', () => {
  it('Counts score after the game including sub combats ends', () => {
    expect(part2(`Player 1:
9
2
6
3
1

Player 2:
5
8
4
7
10`)).to.equal(291);
  });

});
