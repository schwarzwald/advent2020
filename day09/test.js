const expect = require('expect.js');
const { utils } = require('mocha');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 09: Part 1', () => {
  it('Returns first invalid entry', () => {
    expect(part1(`35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`, 5)).to.equal(127);
  });
});
describe('Day 09: Part 2', () => {
  it('Finds sum of first and last entry of continuous entries which sum up to invalid entry', () => {
    expect(part2(`35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`, 5)).to.equal(62);
  });
});
