const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 06: Part 1', () => {
  it('Count sum of answers', () => {
    expect(part1(`abc

a
b
c

ab
ac

a
a
a
a

b`)).to.equal(11)
  });
});
describe('Day 06: Part 2', () => {
  it('Count sum of answers to which everyone answered yes', () => {
    expect(part2(`abc

a
b
c

ab
ac

a
a
a
a

b`)).to.equal(6)
  });
});
