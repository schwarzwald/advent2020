const xgcd = (a, b) => {
  if (b == 0n) {
    return [1n, 0n, a];
  }
  let [x, y, d] = xgcd(b, a % b);
  return [y, x - y * ((a / b) | 0n), d];
}

const modinverse = (a, b) => (b + xgcd(a, b)[0]) % b;

module.exports = input => {
  let mods = input.split('\n')[1]
    .split(',')
    .map((c, idx) => c != 'x' ? [BigInt(c), BigInt(((c - 1) * idx) % c)] : null)
    .filter(x => x != null);

  let n = mods.reduce((prod, c) => prod * c[0], 1n);
  return mods.reduce((x, [m, a]) => x + a * n / m * modinverse(n / m, m), 0n) % n;
}
