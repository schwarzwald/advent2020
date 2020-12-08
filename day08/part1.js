module.exports = input => {
  const instructions = input.split('\n')
    .map(l => /^(\w+) ([+-]\d+)/.exec(l))
    .map(([_, instr, val]) => [instr, +val]);

  let hist = new Set();
  let acc = 0;
  let ip = 0;

  while (!hist.has(ip)) {
    let [instr, val] = instructions[ip];
    hist.add(ip);

    switch (instr) {
      case 'nop': ip++; break;
      case 'jmp': ip += val; break;
      case 'acc': acc += val; ip++; break;
    }
  }
  return acc;
}
