module.exports = (input, preamble = 25) => {
  let entries = input.split('\n').map(Number);

  for (let i = preamble; i < entries.length; i++) {
    let valid = false;

    for (let j = i - preamble; j < i - 1; j++) {
      for (let k = j + 1; k < i; k++) {
        if (entries[i] == entries[j] + entries[k]) {
          valid = true;
          break;
        }
      }
    }

    if (!valid) {
      for (let l = 2; l <= entries.length; l++) {
        for (let m = 0; m <= entries.length - l; m++) {
          let subentries = entries.slice(m, m + l);
          if (entries[i] == subentries.reduce((sum, a) => sum + a)) {
            return Math.min(...subentries) + Math.max(...subentries);
          }
        }
      }
    }
  }
}
