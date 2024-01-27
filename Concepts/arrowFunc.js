// arrow function -> a concise way to write function expressions
//                   good for simple function that you use only once 
//                   (parameters) => some code


// --- BASIC EXAMPLE OF ARROW FUNCTION---

/*
const hello = (name,age) =>{ 

    console.log(`Hello ${name}`)
    console.log(`You are ${age} years old`)
};

hello("Coder",18);
*/

// ---SET TIMEOUT EXAMPLE OF ARROW FUNCTION---

/*
setTimeout(()=>{
    console.log("Hello")

},3000);
*/


// ---EXAMPLE OF ARROW FUNC USING MAP, REDUCE & FILTER---

const numbers = [1,2,3,4,5,6];

const squares= numbers.map((element)=>Math.pow(element,2));
const evenNums = numbers.filter((element)=>element%2===0);
const total = numbers.reduce((accumulator,element)=>accumulator+element);

console.log(squares);
console.log(evenNums);
console.log(total);

// for writing only one line in function body then no need for opening and closing braces and even the return statement
