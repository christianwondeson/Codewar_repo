str = "this is the website is loser website lol";

function disemvowel(str) {
  let strArray = str.split("");

  return strArray
    .map((stringChar) => {
      if (/[aeiouAEIOU]/.test(stringChar)) {
        return "";
      } else {
        return stringChar;
      }
    })
    .join("");
}

let result = disemvowel(str);
