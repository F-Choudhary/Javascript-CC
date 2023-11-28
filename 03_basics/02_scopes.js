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
    // console.log("inner a 20",a)
    // console.log("inner b 22",b)
    // console.log("inner c 30",c)
}

// console.log("outer a 10",a)
// console.log("outer b 12",b)
// console.log("outer c 20",c)


// scope level-----------------
//--------------------------------------------------------------------

function one(){
    const username = "hitesh"

    // its not that function will be inside in function it canbe in if else , or loops
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}
one()

//-------------------------------------------------------

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
// we can declare by two by basic with function name
// and by holding in var i.e expression
// but in function name we can call above function declaration
// but in expression function we can not call above function declaration
// it will throw error we strictly call below function

console.log(addone(5)) // <------ like this wont throw error bcz its function name

function addone(num){
    return num + 1
}



addTwo(5) // <---------- it will throw error
const addTwo = function(num){
    return num + 2
}