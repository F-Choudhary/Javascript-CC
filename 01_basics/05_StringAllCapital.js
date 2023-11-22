const str = 'i have learned something new today';

const arr = str.split(" ")
// console.log(arr[1][0]);
for(var i=0; i<arr.length; i++){
    // arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)

    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
}
const str2 = arr.join(" ")
console.log(str2);