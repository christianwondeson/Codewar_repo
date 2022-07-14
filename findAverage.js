function find_average(array) {
  // your code here
  let sum = 0;
  let average = 0;
  let length = array.length;

  if (array.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < length; i++) {
      sum += array[i];
    }
    average = sum / length;
  }
  return average;
}

let result = find_average([1, 1, 1]);
