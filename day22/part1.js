module.exports = input => {
  let [p1, p2] = input.split(/\r?\n\r?\n/)
    .map(r => r.split('\n').slice(1).map(Number))

  while (p1.length && p2.length) {
    let a = p1.shift();
    let b = p2.shift();

    if (a > b) {
      p1.push(a, b);
    } else {
      p2.push(b, a);
    }
  }

  return (p1.length ? p1 : p2).reduce((s, a, ix, arr) => s + a * (arr.length - ix), 0);
}
