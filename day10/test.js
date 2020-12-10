const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 10: Part 1', () => {
  it('Finds multiple of differences of 3 and 1 jolts', () => {
    expect(part1(`16
10
15
5
1
11
7
19
6
12
4`)).to.equal(35);

    expect(part1(`28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`)).to.equal(220);
  })
});
describe('Day 10: Part 2', () => {
  it('Calculates number of possible connections', () => {
    expect(part2(`16
10
15
5
1
11
7
19
6
12
4`)).to.equal(8);

    expect(part2(`28
  33
  18
  42
  31
  14
  46
  20
  48
  47
  24
  23
  49
  45
  19
  38
  39
  11
  1
  32
  25
  35
  8
  17
  7
  9
  4
  2
  34
  10
  3`)).to.equal(19208);
  });
});
