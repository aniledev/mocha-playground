const divide = (a, b) => {
  if (b == 0) {
    throw new Error("Cannot divide by 0");
  }

  return a / b;
};

const sort = (list) => {
  for (let i = 1; i < list.length; i++) {
    // change i from 2 to 1 to pass test case sort negative integers in ascending order
    let j = i;
    while (j > 0 && list[j - 1] > list[j]) {
      let temp = list[j];
      list[j] = list[j - 1];
      list[j - 1] = temp;

      j--;
    }
  }
  return list;
};

const array = [-10, -235, -488, -8000, -314, -2, -49];

sort(array);

module.exports.divide = divide;
module.exports.sort = sort;
