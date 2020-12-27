class Circle {

  constructor(size) {
    this.value = null;
    this.length = 0;
    this.map = new Uint32Array(size)
  }

  add(val) {
    this.length++;

    if (this.value == null) {
      this.set(val, val);
    } else {
      this.set(val, this.get(this.value));
      this.set(this.value, val);
    }

    this.value = val;

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

    let r1 = circle.remove();
    let r2 = circle.remove();
    let r3 = circle.remove();

    while (r1 == next || r2 == next || r3 == next) {
      next = next - 1 || max;
    }

    circle.reset(next).add(r1).add(r2).add(r3).reset(value);
  }

  return circle.reset(1).next().value * circle.next().value;
}
