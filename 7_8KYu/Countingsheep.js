function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  
  let i = 0;
  let counter = 0;
  
  while(i < arrayOfSheep.length)
  {
    if(arrayOfSheep[i] === true)
    {
      counter ++;
    }
    i++;
  }
  return counter;
}
console.log(counshepps([true,false,true]));
