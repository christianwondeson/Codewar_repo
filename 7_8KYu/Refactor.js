function removeChar(str){
 //You got this!
  let finalResult = [];
  let result = '';
  
  for(let i = 0; i < str.length; i++)
  {
    finalResult.push(str[i]);
  }
  finalResult.shift();
  finalResult.pop();
  
  for(let j = 0; j < finalResult.length; j++)
  {
    result += finalResult[j];
  }
  
  return result;
};

let  result = removechar('javaScript');

