module.exports = input => {
  let foods = input.split('\n')
    .map(r => r.replace(')', '').trim().split(' (contains ')
      .map(c => c.includes(', ') ? c.split(', ') : c.split(' ')));

  let allergens = new Set(foods.map(([i, a]) => a).flat());
  let ingredients = new Set(foods.map(([i, a]) => i).flat());
  let map = [...ingredients].reduce((map, ing) => map.set(ing, new Set(allergens)), new Map());

  for (let [ing, alg] of foods) {
    for (let a of alg) {
      for (let i of ingredients) {
        if (!ing.includes(i)) {
          map.get(i).delete(a);
        }
      }
    }
  }

  let changed = false;
  do {
    changed = false;

    for (let alg of allergens) {
      let ings = [...map.entries()]
        .filter(([, v]) => v.has(alg))
        .reduce((arr, [k]) => [k, ...arr], []);

      if (ings.length == 1) {
        let algs = map.get(ings[0]);
        if (algs.size > 1) {
          algs.clear();
          algs.add(alg);
          changed = true;
        }
      }
    }
  } while (changed);

  return [...map.entries()].filter(([, v]) => v.size > 0)
    .sort(([, v1], [, v2]) => v1.values().next().value.localeCompare(v2.values().next().value))
    .map(([k]) => k).join(',');
}
