module.exports = input => {
  let [timestamp, lines] = input.split('\n');
  timestamp = +timestamp;

  return lines.split(',')
    .filter(c => c != 'x')
    .map(Number)
    .map(l => [l, l - timestamp % l])
    .reduce(([minid, mint, mresult], [id, t]) => t < mint ? [id, t, id * t] : [minid, mint, mresult], [0, timestamp, 0])[2];
}
