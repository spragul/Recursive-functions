// Write a recursive function to find the sum of digits of a number.

/**
 num=num%10=>654%10=4
 */
function sum(num) {
  if (num < 9) {
    return num;
  }
  return (num % 10) + sum(Math.floor(num / 10));
}
console.log(sum(482));
