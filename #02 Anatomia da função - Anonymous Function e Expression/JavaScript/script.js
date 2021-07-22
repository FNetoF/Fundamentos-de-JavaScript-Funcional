// Anonymous function é uma dunção que não tem nome

(function (a, b, c) {
  return a + b + c;
})

// function expression

const sum = function (a, b) {
  return a + b;
}

const result = sum(2, 9);
console.log(result);

const anotherSum = sum;
console.log(anotherSum(11, 6));
