const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 08: Part 1', () => {
  it('Calculates value of accumulator after one program cycle', () => {
    expect(part1(`nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`)).to.equal(5);
  })
});
describe('Day 08: Part 2', () => {
  it('Calculates value of accumulator of the fixed', () => {
    expect(part2(`nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`)).to.equal(8);
  });
});
