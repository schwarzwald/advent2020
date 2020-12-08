module.exports = input => {
  const instructions = input.split('\n')
    .map(l => /^(\w+) ([+-]\d+)/.exec(l))
    .map(([_, instr, val]) => [instr, +val]);

  const execute = (instructions, ip, acc, flip = true) => {
    let hist = new Set();

    while (!hist.has(ip)) {
      if (ip >= instructions.length) {
        return acc;
      }

      let [instr, val] = instructions[ip];
      hist.add(ip);

      if (instr != 'acc' && flip) {
        let copy = instructions.slice();
        copy[ip] = [instr == 'nop' ? 'jmp' : 'nop', val];
        let result = execute(copy, ip, acc, false)
        if (result != null) {
          return result;
        }
      }

      switch (instr) {
        case 'acc': acc += val; ip++; break;
        case 'nop': ip++; break;
        case 'jmp': ip += val; break;
      }
    }

    return null;
  }

  return execute(instructions, 0, 0);
}
