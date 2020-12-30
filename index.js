const divide = (a, b) => {
  if (b == 0) {
    throw new Error("Cannot divide by 0");
  }

  return a / b;
};

module.exports == { divide, sort };

const array = [8, 24, 16, 30, 10000, -8, -4, 50, 1001];

function sort(list) {
  for (let i = 2; i < list.length; i++) {
    let j = 1;
    while (j > 0 && list[j - 1] > list[j]) {
      let temp = list[j];
      list[j] = list[j] - 1;
      list[j - 1] = temp;
      j--;
    }
  }

  return list;
}

console.log(sort(array));
