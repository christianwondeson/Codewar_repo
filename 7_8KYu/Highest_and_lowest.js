function highAndLow(numbers){
  // ...
 let arr = numbers.split(' ')
  let result =arr.sort((a,b) => {return Number(a)-Number(b)});
  console.log(result);
  let max = arr[arr.length-1];
  let min = arr[0];
  return (`${max} ${min}`);
}
