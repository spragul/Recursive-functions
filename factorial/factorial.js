//Write a recursive function to calculate the factorial of a number.

//multiplying the integer numbers from 1 to n. The formula for n factorial is n! = n × (n - 1)!.

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

function factorial(num) {
  if (num < 2) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(5));
