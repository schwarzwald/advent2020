module.exports = input => {
  let numbers = input.split(',').map(Number);

  for (let i = 0; i < 2020; i++) {
    let num = numbers[numbers.length - 1];
    let ord = 0;
    for (let j = numbers.length - 2; j >= 0; j--) {
      if (numbers[j] == num) {
        ord = numbers.length - j - 1;
        break;
      }
    }
    numbers.push(ord);
  }

  return numbers[2019];
}
