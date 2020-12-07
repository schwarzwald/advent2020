module.exports = input => {
  const map = input.split('\n').reduce((m, l) => {
    let [parent, children] = l.split('contain ');
    parent = parent.match(/^(\w+ \w+)/)[1];

    children = children.trim().split(',');
    if (children != 'no other bags.') {
      m.set(parent, children.map(c => c.match(/(\d+) (\w+ \w+)/))
        .map(([_, count, color]) => new Object({ count, color })));
    }

    return m;
  }, new Map());

  const count = (cnt, color) => (map.get(color) || []).reduce((sum, c) => sum + cnt * count(+c.count, c.color), cnt);

  return count(1, 'shiny gold') - 1;
}
