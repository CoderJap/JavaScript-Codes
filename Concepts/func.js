// function declaration - define a reusable block of code
//                        that performs a specific task

/*
function hello(){
    console.log("Hello");
}
*/

// function expression = a way to define function as 
//                       values or variables

// ---HELLO EXAMPLE OF FUNCTION EXPRESSION---

/*
const hello = function(){
    console.log("Hello");
}

hello();
*/

// ---MAP EXAMPLE OF FUNCTION EXPRESSION---

const numbers =[1,2,3,4,5,6];
const squares = numbers.map(function(element){
    return Math.pow(element,2);
});

console.log(squares);


