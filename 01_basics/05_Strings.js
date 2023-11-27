const name = "Fakhruddin"
const age =  23
// console.log(name[0]);
// console.log("My name is "+name+" and I'm "+age+" Old");
// console.log("My name is",name,"and I'm",age,"Old");
// but formating string using above way is not good practice in modern days

//we'll be using backstick => ` `  string interpolation

console.log(`My name is ${name} and I'm ${age} old`)

// Another way to declare string var by using new keywrd which is object
const gameName = new String("PubG-World");
// console.log(gameName[0]);
// console.log(gameName.__proto__); // go to browser console to see all method or prototype

// console.log(gameName.length); // its not a funtion thats y we dont use ()
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('G'));

const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8,11)
// console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('20'))
// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));

let a="abbab".split("a").length
console.log(a);


