let start = 0;
let end = 0;

function sumUp(n) {
  let result = 0;

  for (let i = 0; i <= n; i++) {
    result = result + i;
  }
  return result;
}

start = performance.now();
// console.log(start);
sumUp(1);
end = performance.now();

let timing = end - start;
console.log(timing);

// the time it take to run a larger number is linear with the number digit
// this means when we increase the number "n" which is given as a parameter we increase the computation time
// this lead to not all problem solving code are effcient enough to minimize space and time complexity
// so we must try different solution inorder to minimize the space-time complexity
// O(n)

console.log(
  "other solution that take constant time whether the input number is larger or smaller"
);

function sumUp_1(n) {
  return (n / 2) * (n + 1);
}

let Ts = 0;
let Td = 0;

Ts = performance.now();
// console.log(Ts);
sumUp_1(100);
Td = performance.now();

let TG = Td - Ts;

console.log(TG);

// in the second example the code that constant behaviour the time complexity will not change  even if the enter number is larger or smaller O(1)

// function sumNumbers(numbers) {
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result = numbers[i] + result;
//   }
//   return result;
// }
// let sum = sumNumbers([1, 3, 10, 12]);
// console.log(sum);

// the time complexity for this code the general trend is O(n)

function sumNumbers(numbers) {
  return numbers.reduce((sum, currentNum) => sum + currentNum, 0);
}

console.log(sumNumbers([1, 3, 10]));
// reduce do the same us the above linear code
