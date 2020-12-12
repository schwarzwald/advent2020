const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 12: Part 1', () => {
  it('Calculates manhattan distance from start to final position', () => {
    expect(part1(`F10
N3
F7
R90
F11`)).to.equal(25);
  })
});
describe('Day 12: Part 2', () => {
  it('Calculates manhattan distance from start to final position using waypoint', () => {
    expect(part2(`F10
N3
F7
R90
F11`)).to.equal(286);
  })
});
