module.exports = input => {
  const iterations = 30000000;

  let numbers = input.split(',').map(Number);
  let map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    map.set(numbers[i], i);
  }

  let last = 0;
  for (let i = numbers.length; i < iterations - 1; i++) {
    let ord = map.get(last);
    map.set(last, i);
    last = ord != null ? i - ord : 0;
  }

  return last;
}
