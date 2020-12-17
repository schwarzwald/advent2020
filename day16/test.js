const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 16: Part 1', () => {
  it('Finds sum of invalid tickets', () => {
    expect(part1(`class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50

your ticket:
7,1,14

nearby tickets:
7,3,47
40,4,50
55,2,20
38,6,12`)).to.equal(71);
  });
});

describe('Day 16: Part 2', () => {
  it('Finds product of tickets fields which start with departure', () => {
    expect(part2(`class: 1-3 or 5-7
    departure row: 6-11 or 33-44
departure seat: 13-40 or 45-50

your ticket:
7,1,14

nearby tickets:
7,3,47
40,4,50
55,2,20
38,6,12`)).to.equal(98);
  });
});
