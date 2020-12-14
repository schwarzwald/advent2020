module.exports = input => {
  let masks = [];
  let map = new Map();

  for (let line of input.split('\n')) {
    if (line.startsWith('mask')) {
      masks = [0n, (1n << 36n) - 1n];

      [...line.split(' = ')[1]].forEach((v, ix) => {
        let offset = BigInt(35 - ix);
        if (v == '1') {
          masks[0] |= 1n << offset;
        } else if (v == '0') {
          masks[1] ^= 1n << offset;
        }
      });
    } else {
      let [_, addr, val] = line.match(/mem\[(\d+)\] = (\d+)/);
      map.set(addr, (BigInt(val) | masks[0]) & masks[1]);
    }
  }

  return [...map.values()].reduce((a, b) => a + b);
}
