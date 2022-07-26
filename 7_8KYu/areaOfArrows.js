function arrowArea(a, b) {
  // your code
  let result = 0;

  if (a > 0 && b > 0) {
    b = b / 2;

    result = 0.5 * (a * b);
    console.log(result);
  }
  return result;
}
