// global , block and funtional scope
let a = 10;
const b = 12
var c = 20
// above these are global scope

// below are block scope

if(true){
    // console.log(a)
    let a = 20;
    const b = 22
    var c = 30
    console.log("inner a 20",a)
    console.log("inner b 22",b)
    console.log("inner c 30",c)
}

console.log("outer a 10",a)
console.log("outer b 12",b)
console.log("outer c 20",c)
