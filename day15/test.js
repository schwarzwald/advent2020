const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 15: Part 1', () => {
  it('Calculates 2020th spoken number', () => {
    expect(part1('0,3,6')).to.equal(436);
    expect(part1('1,3,2')).to.equal(1);
    expect(part1('2,1,3')).to.equal(10);
    expect(part1('1,2,3')).to.equal(27);
    expect(part1('2,3,1')).to.equal(78);
    expect(part1('3,2,1')).to.equal(438);
    expect(part1('3,1,2')).to.equal(1836);
  });
});
describe('Day 15: Part 2', () => {
  it('Calculates 30 000 000th spoken number', function () {
    this.timeout(10000);
    expect(part2('0,3,6')).to.equal(175594);
  });
});
