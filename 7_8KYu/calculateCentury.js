function century(year) {
  // Finish this :)
  let counter = 0;
  
  while(year > 0)
  {
    year = year - 100;
    
    counter ++;
  }
  return counter;
}

console.log(century(1900));
