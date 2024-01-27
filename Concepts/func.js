// function declaration - define a reusable block of code
//                        that performs a specific task

/*
function hello(){
    console.log("Hello");
}
*/

// function expression = a way to define function as 
//                       values or variables

// ---BASIC EXAMPLE OF FUNCTION EXPRESSION---

/*
const hello = function(){
    console.log("Hello");
}

hello();
*/

// ---EXAMPLE OF FUNCTION EXPRESSION USING MAP , REDUCE AND FILTER---

const numbers =[1,2,3,4,5,6];
const squares = numbers.map(function(element){
    return Math.pow(element,2);
});

console.log(squares);

const evenNums = numbers.filter(function(){
    return element&2===0;
});

console.log(evenNums);

const total = numbers.reduce(function(accumulator,element){
    return accumulator+element;
});

console.log(total);


