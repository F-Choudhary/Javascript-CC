//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') // for uniqueness
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof outsideTemp); // object types

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ----------------------Memories-------------------------

// Stack (Primitive)  and Heap (Non-primtive)
// stack
let myIgUserId = "fkhruddinn"
let anotherName = myIgUserId
anotherName = 'hello'
console.log(myIgUserId);
console.log(anotherName);

// stack and heap in scene
let userOne = {
    email : "fk@gmail.com",
    upi : "fk@ybl"
}

let userTwo = userOne
userTwo.email = "fakhrud33@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

// stack copy value its not its original value but make copy of it
// in heap it call by reference so its gets change