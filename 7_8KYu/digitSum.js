// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

function getSumOfDigits(integer) {
  var sum = null;
  var digits = Math.floor(integer).toString();
  console.log(digits);
  for (var ix = 0; ix < digits.length; ix++) {
    console.log(ix);
    sum = sum + parseInt(digits[ix]);
    console.log(sum);
  }
  return sum;
}
