function maps(x) {
  let twice = 2;

  let newArray = [];
  for (let i = 0; i < x.length; i++) {
    newArray.push(twice * x[i]);
  }
  console.log(newArray);
  return newArray;
}
