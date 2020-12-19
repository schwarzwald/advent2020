module.exports = input => {
  let [rulesRaw, messagesRaw] = input.split(/\r?\n\r?\n/);

  const rules = rulesRaw.split('\n')
    .map(t => t.split(': '))
    .reduce((map, [id, rule]) => map.set(id.trim(), rule.split(' | ').map(r => r.split(' ').map(r => r.trim()))),
      new Map());

  const compile = id => {
    let subrules = rules.get(id);
    let reg = subrules.map(subrule => subrule.map(r =>
      isNaN(r) ? r.replace(/"/g, '') : compile(r))
      .join(''))
      .join('|');

    return subrules.length > 1 ? "(" + reg + ")" : reg;
  }

  let reg = new RegExp("^" + compile('0') + "$");

  console.log(compile('42'))

  return messagesRaw.split('\n')
    .filter(m => reg.test(m.trim()))
    .length;
}