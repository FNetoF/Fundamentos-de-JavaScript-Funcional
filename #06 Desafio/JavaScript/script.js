/** create a renge function
 *  rage(5) -> [1, 2, 3, 4, 5]
 *  rage(6, 11) -> [6, 7, 8, 10, 11]
 *  rage(10, 19, 2) -> [10, 12, 14, 16, 18]
 *  rage(6, 2) -> [6, 5, 4, 3, 1]
 *  rage(8, -3, 4) -> [8, 4, 0]
 */

const rage1 = (num) => {
  const nums = [];
  for (let i = 1; i <= num; i++) {
    nums.push(i);
  }
  return nums;
};

console.log(rage1(5));

const range2 = (num1, num2) => {
  const nums = [];
  for (let i = num1; i <= num2; i++) {
    nums.push(i);
  }
  return nums;
};

console.log(range2(6, 11));

const range3 = (num1, num2, step = 1) => {
  const nums = [];

  for (let i = num1; i <= num2; i += step) {
    nums.push(i);
  }

  return nums;
};

console.log(range3(10, 19, 2));



const range4 = (num1, num2) => {
  const nums = [];
  for (let i = num1; i >= num2; i--) {
    nums.push(i);
  }
  return nums;
};

console.log(range4(6, 2));



const range5 = (num1, num2, step = 1) => {
  const nums = [];

  for (let i = num1; i >= num2; i -= step) {
    nums.push(i);
  }

  return nums;
};

console.log(range5(8, -3, 4));
