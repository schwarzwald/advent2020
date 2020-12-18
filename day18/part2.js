const eval = (e, i, push) => {
  let a = null;
  let b = null;
  let op = null;

  for (; i < e.length; i++) {
    let x = e[i];
    if (x == '+' || x == '*') {
      op = x;
      if (x == '+') {
        continue;
      }
    }

    if (x == '(' || x == '*') {
      if (a == null) {
        [a, i] = eval(e, i + 1, x == '(');
      } else {
        [b, i] = eval(e, i + 1, x == '(');
      }
    } else if (x == ')') {
      if (push) {
        i++;
      }
      break;
    } else if (a == null) {
      a = +x;
    } else {
      b = +x;
    }

    if (a != null && b != null) {
      a = op == '+' ? a + b : a * b;
      b = null;
      op = null;
    }
  }

  return [a, i - 1];
}

module.exports = input => input.split('\n')
  .map(e => eval(e.replace(/\s/g, ''), 0, false)[0])
  .reduce((a, b) => a + b);
