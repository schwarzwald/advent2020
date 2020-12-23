const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 23: Part 1', () => {
  it('Calculates labels on the cups after cup #1 after 100 moves', () => {
    expect(part1('389125467')).to.equal('67384529');
  });
});
describe('Day 23: Part 2', () => {
  it('Multiplies labels of two cups after cup #1 after 1 mil. moves with 1 mil. cups', function () {
    this.timeout(10000);
    expect(part2('389125467', 1000000)).to.equal(126);
  });
});
