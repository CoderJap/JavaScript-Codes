// string slicing -> creating a substring from a portion of another string
//                    string.slice(start,end) : end is exclusive 


const fullName = "Coder Jap";

let firstName = fullName.slice(0,6);
let lastName = fullName.slice(6,10);

console.log(firstName);
console.log(lastName);

/*
const email = "coder001@gmail.com";

let username = email.slice(0,email.indexOf("@")); 
let extension = email.slice(email.indexOf("@"));

console.log(username);
console.log(extension);
*/



