// spread operator -> ... allows an iterable such as an array or string to be expanded into separate elements (unpacks the element)


/*
let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);

let username ="Coder Jap";
let letters = [...username].join("-");

console.log(letters);
*/

let fruits = ["apple" , "orange" , "banana"];
let vegetables =["carrot","celery","potatoes"];
let foods = [...fruits,...vegetables];

console.log(foods);
