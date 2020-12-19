module.exports = input => {
  let [rulesRaw, messagesRaw] = input.split(/\r?\n\r?\n/);

  const rules = rulesRaw.split('\n')
    .map(t => t.split(': '))
    .reduce((map, [id, rule]) => map.set(id.trim(), rule.split(' | ').map(r => r.split(' ').map(r => r.trim()))),
      new Map());

  const compile = id => {
    if (id == '8') {
      return '(' + compile('42') + ')+';
    }

    if (id == '11') {
      let r1 = compile('42');
      let r2 = compile('31');

      let r = '(';

      for (let i = 1; i <= 4; i++) {
        r += '(' + r1.repeat(i) + r2.repeat(i) + ')' + (i != 4 ? '|' : '');
      }

      return r + ')';
    }

    let subrules = rules.get(id);
    let reg = subrules.map(subrule => subrule.map(r =>
      isNaN(r) ? r.replace(/"/g, '') : compile(r))
      .join(''))
      .join('|');

    return subrules.length > 1 ? "(" + reg + ")" : reg;
  }

  let reg = new RegExp("^" + compile('0') + "$");

  return messagesRaw.split('\n')
    .filter(m => reg.test(m.trim()))
    .length;
}
