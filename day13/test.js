const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 13: Part 1', () => {
  it('Calculates the ID of the earliest bus you can take multiplied by the number of minutes to wait', () => {
    expect(part1(`939
7,13,x,x,59,x,31,19`)).to.equal(295);
  });
});
describe('Day 13: Part 2', () => {
  it('Calculates the earliest timestamp at which the buses depart in prescribed intervals', () => {
    expect(part2(`939
7,13,x,x,59,x,31,19`)).to.equal(1068781);

    expect(part2(`939
    67,7,59,61`)).to.equal(754018);

    expect(part2(`939
    67,7,x,59,61`)).to.equal(1261476);

    expect(part2(`939
    1789,37,47,1889`)).to.equal(1202161486);
  });
});
