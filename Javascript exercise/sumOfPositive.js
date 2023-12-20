const input = [1, -4, 12, 0, -3, 29, -150];
const sumOfPositive = input.filter((num) => num > 0 ).reduce( (prev, num) => prev + num , 0)
console.log(sumOfPositive);