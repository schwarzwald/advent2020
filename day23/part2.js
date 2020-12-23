class Circle {

  constructor() {
    this.head = null;
    this.length = 0;
    this.map = new Map();
  }

  add(...vals) {
    for (let val of vals) {
      this.length++;

      if (this.head == null) {
        this.head = new Node(val);
        this.head.next = this.head;
        this.head.prev = this.head;
      } else {
        let node = new Node(val);
        node.prev = this.head;
        node.next = this.head.next;
        node.next.prev = node;
        this.head.next = node;
        this.head = node;
      }

      this.map.set(val, this.head);
    }

    return this;
  }

  val() {
    return this.head ? this.head.val : null;
  }

  next() {
    this.head = this.head.next;
    return this;
  }

  reset(node) {
    this.head = node;
    return this;
  }

  find(val) {
    this.reset(this.map.get(val));
    return this;
  }

  remove() {
    if (this.length == 0) {
      return null;
    }

    let val = this.head.val;
    if (this.length == 1) {
      this.head = null;
    } else {
      let next = this.head.next;
      let prev = this.head.prev;

      next.prev = prev;
      prev.next = next;
      this.head = prev;
    }

    this.length--;
    return val;
  }

}
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

module.exports = (input, rounds = 10000000) => {
  let max = 1000000;
  let circle = input.split('')
    .map(Number)
    .reduce((c, v) => c.add(v), new Circle());

  for (let i = circle.length + 1; i <= max; i++) {
    circle.add(i);
  }

  for (let i = 0; i < rounds; i++) {
    circle.next();

    let head = circle.head;
    let next = circle.val() - 1 || max;
    let removed = [circle.next().remove(), circle.next().remove(), circle.next().remove()];

    while (removed.includes(next)) {
      next = next - 1 || max;
    }

    circle.find(next).add(...removed).reset(head);
  }

  return circle.find(1).next().val() * circle.next().val();
}
