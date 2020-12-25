const expect = require('expect.js');
const part1 = require('./part1');

describe('Day 25: Part 1', () => {
  it('Calculates the encryption key', () => {
    expect(part1(`5764801
    17807724`)).to.equal(14897079);
  });
});