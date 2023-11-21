const accID = 2917
let accEmail = "abc@gmail.com"
var accPasswrd = 12345
accCity = "Mumbai"
let accountState;


// accID = 1221 //not allowed
accEmail = "xyz.com"
accPasswrd = 122211
accCity = "Bombay"
console.log(accID);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accID, accEmail, accPasswrd, accCity,accountState])