// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

console.log(myArr.length);

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() //by default it will give comma seperated value ' , '
// const newArr2 = myArr.join(" ")


// console.log(myArr);
// console.log( newArr);
// console.log( newArr2);
// console.log( typeofnewArr); // strings type

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // slice give value from given point to till range but not last index

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // it change original array till range inclue last index too
console.log("C ", myArr);
console.log(myn2.splice(2,0,4)); // adding elem to particular index at index 2 add 4 , 0 is no deletion
console.log(myn2);
