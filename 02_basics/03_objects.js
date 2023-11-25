// we can create object by two ways
//1. singleton
// Object.create - constructor

//2. object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Fakhruddin",
    "full name": "Fakhruddin Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Mumbai",
    email: "fs@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// we can access value by dot(.) and by passing in [""] but avoid using dot(.) 
// console.log(JsUser.email)
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "fs@chatgpt.com"
// Object.freeze(JsUser) // lock object chnges
// JsUser.email = "fs@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

