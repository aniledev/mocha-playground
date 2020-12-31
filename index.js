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

const diff = (a, b) => {
  return a.filter((n) => !b.includes(n));
};

const sum = (arr) => {
  return new Promise((resolve, reject) => {
    const ans = arr.reduce((acc, curr) => {
      const num = parseFloat(curr);
      return acc + (isNaN(num) ? 0 : num);
    }, 0);
    resolve(ans);
  });
};

module.exports.divide = divide;
module.exports.sort = sort;
module.exports.diff = diff;
module.exports.sum = sum;
