function rangeBitCount(a, b) {
  //coding and coding..
  let convertedDecimals = [];
  let store;
  let counter = 0;

  for (let i = a; i <= b; i++) {
    convertedDecimals.push(i.toString(2));

    for (let j = 0; j < convertedDecimals.length; j++) {
      store = convertedDecimals[j];
    }
    //console.log(store)
    let secondArray = store.split("");
    let itr = 0;
    while (itr < secondArray.length) {
      if (secondArray[itr] === "1") {
        counter = counter + 1;
      }
      itr++;
    }
    console.log(counter);
  }
  //console.log(counter);
  return counter;
}
