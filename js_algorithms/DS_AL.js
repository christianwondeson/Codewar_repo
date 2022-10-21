/* stack */
// functions: push, pop, peak, length
// push functionality is need when we insert an element into the stack by checking where the stack is full or not
// pop is used when we try to remove the top element from the stack by check if the sack is empty or not
// peak will find the address of the top or the last element in the sack and idenitfy the last element on the stack

var letters = []; //this is our stack on js arrays have the same functionality will stack

var word = "bobs";
var rword = "";

//pushing each letter of word string on letter array or stack

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}
console.log(letters);
// pop off from letter stack into reverse word

for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

// popped in this manner
// r
// a
// c
// e
// c
// a
// r
if (rword === word) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}




