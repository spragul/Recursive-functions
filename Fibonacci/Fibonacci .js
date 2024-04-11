// Write a recursive function to calculate the nth Fibonacci number.

//series --  0, 1, 1, 2, 3, 5, 8, 13, 21, 34
/*
F1= 0 + 0 = 0
 F2 = 0 + 1 = 1
 F3 = 1 + 1 = 2
F4 = 2 + 1 = 3
F5 = 2 + 3 = 5
F6 = 3 + 5 = 8
F7 = 5 + 8 = 13
 Fn = Fn-1 + Fn-2. 
 */


function fibonacciNumber(num) {
    if (num <= 1) {
      return num;
    } else {
      return fibonacciNumber(num - 1) + fibonacciNumber(num - 2);
    }
  }
  console.log(fibonacciNumber(6))
  console.log(fibonacciNumber(8))
  console.log(fibonacciNumber(9))