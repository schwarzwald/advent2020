module.exports = input => {
  const map = input.split('\n').reduce((m, l) => {
    let [parent, children] = l.split('contain ');
    parent = parent.match(/^(\w+ \w+)/)[1];

    children = children.trim().split(',');
    if (children != 'no other bags.') {
      children.map(c => c.match(/\d+ (\w+ \w+)/)[1])
        .forEach(c => m.set(c, [parent, ...(m.get(c) || [])]));
    }

    return m;
  }, new Map());

  let queue = ['shiny gold'];
  let visited = new Set();

  while (queue.length) {
    let current = queue.pop();

    if (visited.has(current)) {
      continue;
    }

    visited.add(current);
    queue.push(...(map.get(current) || []));
  }

  return visited.size - 1;
}
