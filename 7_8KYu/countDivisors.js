function getDivisorsCnt(n) {
  // todo
  let counter = 0;

  for (let i = 1; i <= n; i++) {
    let checking = n % i;
    if (checking === 0) {
      counter++;
    }
  }
  return counter;
}
