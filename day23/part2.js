class Circle {

  constructor(size) {
    this.value = null;
    this.length = 0;
    this.map = new Array(size)
  }

  add(...vals) {
    for (let val of vals) {
      this.length++;

      if (this.value == null) {
        this.set(val, val);
      } else {
        this.set(val, this.get(this.value));
        this.set(this.value, val);
      }

      this.value = val;
    }

    return this;
  }

  get(val) {
    return this.map[val - 1];
  }

  set(val, next) {
    this.map[val - 1] = next;
  }

  next() {
    this.value = this.get(this.value);
    return this;
  }

  reset(node) {
    this.value = node;
    return this;
  }

  remove() {
    if (this.length == 0) {
      return null;
    }

    let val = this.get(this.value);
    if (this.length == 1) {
      this.value = null;
    } else {
      this.set(this.value, this.get(val));
    }

    this.length--;
    return val;
  }

}

module.exports = input => {
  let max = 1000000;

  let circle = input.split('')
    .map(Number)
    .reduce((c, v) => c.add(v), new Circle(max));


  for (let i = circle.length + 1; i <= max; i++) {
    circle.add(i);
  }

  for (let i = 0; i < 10000000; i++) {
    circle.next();
    let value = circle.value;
    let next = circle.value - 1 || max;
    let removed = [circle.remove(), circle.remove(), circle.remove()];

    while (removed.includes(next)) {
      next = next - 1 || max;
    }
    circle.reset(next).add(...removed).reset(value);
  }

  return circle.reset(1).next().value * circle.next().value;
}
