// .filter()  -> creates a new array by filtering out elements

// --- NUMBERS EXAMPLE---
/*
let numbers = [1,2,3,4,5,6,7];
let evenNums = numbers.filter(isEven);

console.log(evenNums);

function isEven(element){
    return element%2==0;
}
*/

// --- AGES EXAMPLE---

const ages=[16,17,18,18,19,20,60];
const adults = ages.filter(isAdult);

console.log(adults);

function isAdult(element){
    return element>=18;
}