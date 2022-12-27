console.log("learning ES6 JS");

const desc = {
  name: "chris",
  age: 23,
  skill: "web development",
  lang: ["js", "c#", "c++", "c"],
};
// using template leterials
console.log(
  `my name is ${desc.name} and i am ${desc.age} young , my skill set is ${desc.skill}`
);

// destructing our object we can use object in this new way

const { skill, lang } = desc;
console.log(`i am a ${skill}`);

for (let langs of lang) {
  console.log(langs);
}

// object literals , string literals , object destructure

function address(addressed) {
  const { city, state, country } = addressed;
  // destruture
  console.log(country);
  const newAddress = {
    // we use object literial
    city,
    state,
    country,
  };
  // we are using object destructuring

  const { city: newCity, state: newState, country: newCountry } = newAddress;

  console.log(`my location \t${newCity} \t ${newState} \t ${newCountry}`);
}
address({ city: "AA", state: "zone-1", country: "ETH" });

// let see the spread operator

const skilled = [...lang];
// this will intsantate a new array with the separate value of its own
// skilled  // lang are different
skilled[3] = "kotlin";
console.log(JSON.stringify(skilled));
console.log(JSON.stringify(lang));

// let see rest operator

function adding(...num) {
  // includes property
  console.log(num.includes(2));
  // this will return true if the element we passed in is present in the array list
  let sum = num.reduce(
    (accumulator, currentvalue) => accumulator + currentvalue
  );
  // this reduce method will return a single value but the input of this method is an array
  // also it has two parameters the first is the method we want the last is out inital value
  // if we use the inital value as a string it will concatnate the whole value

  console.log(num);
  console.log(sum);
}

adding(2, 44, 30, 11, 1);
// before using rest operator the num value well read a sing number
// only function are hoisted in javascript we can define them anywhere we want but let, const, can't be hoisted

// but in the case of var which we don't use defines it as a undefined variable

import { names, describe } from "./example.js";
console.log(JSON.stringify(names));

const {name, age, skill:skills} = describe;

console.log(name, age, skills)
// this is object destructuring


// let see padstart and padend
console.log(name.padStart().length);
console.log(skills.padEnd().charCodeAt(2));
// this will return unicode of the character
