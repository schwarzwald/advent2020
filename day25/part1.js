module.exports = input => {
  let [cpub, dpub] = input.split('\n').map(Number);

  const handshake = (x, a) => (x * a) % 20201227;

  let i = 0;
  let xc = 1;
  let xd = 1;

  while (xc != cpub) {
    xc = handshake(xc, 7);
    i++;
  }

  let j = 0;
  while (xd != dpub) {
    xd = handshake(xd, 7);
    j++;
  }

  xd = 1;
  while (i--) {
    xd = handshake(xd, dpub);
  }

  return xd;
}
