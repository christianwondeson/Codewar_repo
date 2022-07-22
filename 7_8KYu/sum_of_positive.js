function positiveSum(arr) {
  
  let i = 0;
  let sum = 0;
  
  while( i < arr.length)
  {
    if(arr[i] > 0)
    {
      sum += arr[i];
    }
    i++;
  }
  return sum;
