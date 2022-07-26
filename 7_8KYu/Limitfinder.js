function smallEnough(a, limit) {
  let counter = 0;

  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    if (a[i] <= limit) {
      counter++;
    } else if (a[i] > limit) {
      return false;
    }
  }
  console.log(counter);
  if (counter > 0) {
    return true;
  } else {
    return false;
  }
}
