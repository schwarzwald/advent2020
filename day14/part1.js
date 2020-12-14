module.exports = input => {
  let masks = [];
  let map = new Map();

  for (let line of input.split('\n')) {
    if (line.startsWith('mask')) {
      masks = [0n, ~0n];

      [...line.split(' = ')[1]].forEach((v, ix) => {
        let bit = 1n << BigInt(35 - ix);
        if (v == '1') {
          masks[0] |= bit;
        } else if (v == '0') {
          masks[1] ^= bit;
        }
      });
    } else {
      let [_, addr, val] = line.match(/mem\[(\d+)\] = (\d+)/);
      map.set(addr, (BigInt(val) | masks[0]) & masks[1]);
    }
  }

  return [...map.values()].reduce((a, b) => a + b);
}
