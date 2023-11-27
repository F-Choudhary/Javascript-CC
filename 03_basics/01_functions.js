// by function name
function add(a,b){
    return a+b
}

// console.log(add(2,3));

// by paasing in varibale i.e anonymous function
let add2 = function(a,b){
    return a+b;
}
// console.log(add2(7,8));

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// --> sayMyName is referece if we want to execute or call pass () after name like --> sayMyName() 
// sayMyName  // it wont throw error
// sayMyName()


function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}

// addTwoNumbers(2,3)
// let res = addTwoNumbers(2,3)
// console.log(res); // undefined because console log not return anything see below code

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2

    /* return result    -----> after whatever code will be that 
     will be unreachable e.g after return in next line we do 
     some console.log that wont prnt anything
     if we shift above return it will execute
    */
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

// or we can do like below
// console.log("res: ", addTwoNumbers(3,4));

function loginUserMessage(username = "sam"){ // loginUserMessage(username){  } <--- so if we dont pass anything it will execute this if condition
    if(!username){  // also username === undefined
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage()) // bydefault it will sam




