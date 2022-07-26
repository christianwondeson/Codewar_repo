function XO(str) {
  //code here
  let lowerCase = str.toLowerCase();
  let counter = 0;
  let counter_1 = 0;

  for (let i = 0; i < lowerCase.length; i++) {
    console.log(lowerCase[i]);

    switch (lowerCase[i]) {
      case "x":
        counter++;
        break;
      case "o":
        counter_1++;
        break;
    }
  }
  console.log(counter, counter_1);

  if (counter === counter_1) {
    return true;
  } else if (counter > 0 && counter_1 === 0) {
    return false;
  } else if (counter === 0 && counter_1 > 0) {
    return false;
  } else {
    return false;
  }
}
