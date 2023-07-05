//program to calculate factorial of number

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);
