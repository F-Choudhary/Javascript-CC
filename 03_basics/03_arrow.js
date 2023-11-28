// --------------jst practicing----------------------
// mycode
const det = {
    name : "fakhruddin",
    age : 23
}

function printDet(obj){
    console.log(`My name is ${obj.name}. I'm ${obj.age} old`);
}

// printDet(det)

// -------------------------------------------------------------


const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}
// console.log(user.username)
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // in browser engine it will give object window but in node in it will give empty object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // undefined bcz it works in object
// }

// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // this is also same as above

// }

// chai()

//--------------ARROW FUNCTION----------------

// jst remove function keyword and put ' => ' after ' () '

const chai =  () => {
    let username = "hitesh"
    console.log(username);
    console.log(this.username)
    // console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()



