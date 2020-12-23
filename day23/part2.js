class Circle {

  constructor(size) {
    this.head = null;
    this.length = 0;
    this.map = new Array(size)
  }

  add(...vals) {
    for (let val of vals) {
      this.length++;

      if (this.head == null) {
        this.set(val, val);
      } else {
        this.set(val, this.get(this.head));
        this.set(this.head, val);
      }

      this.head = val;
    }

    return this;
  }

  get(val) {
    return this.map[val - 1];
  }

  set(val, next) {
    this.map[val - 1] = next;
  }

  val() {
    return this.head;
  }

  next() {
    this.head = this.get(this.head);
    return this;
  }

  reset(node) {
    this.head = node;
    return this;
  }

  remove() {
    if (this.length == 0) {
      return null;
    }

    let val = this.get(this.head);
    if (this.length == 1) {
      this.head = null;
    } else {
      this.set(this.head, this.get(val));
    }

    this.length--;
    return val;
  }

}

module.exports = input => {
  let max = 1000000;

  let circle = input.split('')
    .map(Number)
    .reduce((c, v) => c.add(v), new Circle());


  for (let i = circle.length + 1; i <= max; i++) {
    circle.add(i);
  }

  for (let i = 0; i < 10000000; i++) {
    circle.next();
    let head = circle.head;
    let next = circle.val() - 1 || max;
    let removed = [circle.remove(), circle.remove(), circle.remove()];

    while (removed.includes(next)) {
      next = next - 1 || max;
    }
    circle.reset(next).add(...removed).reset(head);
  }

  return circle.reset(1).next().val() * circle.next().val();
}
