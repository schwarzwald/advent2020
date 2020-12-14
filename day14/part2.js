module.exports = input => {
  let map = new Map();
  let mask = 0n;
  let x = [];

  for (let l of input.split('\n')) {
    if (l.startsWith('mask')) {
      mask = 0n;
      x = [];
      [...l.split(' = ')[1]].forEach((v, ix) => {
        if (v == '1') {
          mask |= 1n << BigInt(35 - ix);
        } else if (v == 'X') {
          x.push(BigInt(ix));
        }
      });
    } else {
      let [_, addr, val] = l.match(/mem\[(\d+)\] = (\d+)/);
      addr = BigInt(addr);
      val = BigInt(val)

      for (let i = 0; i < 1 << x.length; i++) {
        let copy = addr | mask;

        for (let b = 0; b < x.length; b++) {
          if ((i >> b) & 1 == 1) {
            copy |= 1n << (35n - x[b]);
          } else {
            copy &= ~(1n << (35n - x[b]));
          }
        }

        map.set(copy, val);
      }
    }
  }

  return [...map.values()].reduce((a, b) => a + b);
}
