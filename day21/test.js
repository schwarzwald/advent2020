const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 21: Part 1', () => {
  it('Counts number of non-allergen occurences in the list', () => {
    expect(part1(`mxmxvkd kfcds sqjhc nhms (contains dairy, fish)
trh fvjkl sbzzf mxmxvkd (contains dairy)
sqjhc fvjkl (contains soy)
sqjhc mxmxvkd sbzzf (contains fish)`)).to.equal(5);
  });
});
describe('Day 21: Part 2', () => {
  it('Constructs canonical dangerous ingredient list', () => {
    expect(part2(`mxmxvkd kfcds sqjhc nhms (contains dairy, fish)
trh fvjkl sbzzf mxmxvkd (contains dairy)
sqjhc fvjkl (contains soy)
sqjhc mxmxvkd sbzzf (contains fish)`)).to.equal('mxmxvkd,sqjhc,fvjkl');
  })
});
