const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 03: Part 1', () => {
  it('Counts number of tree in the way', () => {
    expect(part1(`..##.......
    #...#...#..
    .#....#..#.
    ..#.#...#.#
    .#...##..#.
    ..#.##.....
    .#.#.#....#
    .#........#
    #.##...#...
    #...##....#
    .#..#...#.#`)).to.equal(7);
  });
});
describe('Day 03: Part 2', () => {
  it('Multiplies number of tree in the way using different slopes', () => {
    expect(part2(`..##.......
    #...#...#..
    .#....#..#.
    ..#.#...#.#
    .#...##..#.
    ..#.##.....
    .#.#.#....#
    .#........#
    #.##...#...
    #...##....#
    .#..#...#.#`)).to.equal(336);
  });
});
