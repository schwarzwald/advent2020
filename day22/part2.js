module.exports = input => {

  const subgame = (p1, p2) => {
    let games = new Set();

    while (p1.length && p2.length) {
      let gameId = p1.join('#');

      if (games.has(gameId)) {
        return 1;
      }

      games.add(gameId);

      let a = p1.shift();
      let b = p2.shift();

      let w = 1;

      if (p1.length >= a && p2.length >= b) {
        w = subgame(p1.slice(0, a), p2.slice(0, b));
      } else {
        w = a > b ? 1 : 2;
      }

      if (w == 1) {
        p1.push(a, b);
      } else {
        p2.push(b, a)
      }
    }

    return p1.length ? 1 : 2;
  }

  let [p1, p2] = input.split(/\r?\n\r?\n/)
    .map(r => r.split('\n').slice(1).map(Number));

  return (subgame(p1, p2, 0) == 1 ? p1 : p2).reduce((s, a, ix, arr) => s + a * (arr.length - ix), 0);
}
