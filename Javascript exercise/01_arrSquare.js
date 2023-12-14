// const input = [1, 2, 3, 4, 5];
// console.log(input.forEach( (num) => Math.pow(num,2)))
// console.log(input);
const input = [1, -4, 12, 0, -3, 29, -150];
const sum = input.filter( (num) => num > 0).reduce( (prev,curr) => prev+curr,0) 
console.log(sum);