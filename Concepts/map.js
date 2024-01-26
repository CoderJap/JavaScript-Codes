// .map()-> accepts a callback and applies that function
//          to each element of an array, then return a new array


// --- NUMBERS EXAMPLE---
/*
const numbers = [1,2,3,4,5];
const squares = numbers.map(square);

console.log(squares);

function square(element){
    return Math.pow(element,2);
}
*/

// --- NAMES EXAMPLE---

const students =["Spongebob","Patrick","Squidward","Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowercase);


function upperCase(element){
    return element.toUpperCase();
}

function lowercase(element){
    return element.toLowerCase();
}

console.log(studentsUpper);
console.log(studentsLower);


