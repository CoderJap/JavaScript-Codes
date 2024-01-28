// destructuring -> extract values from arrays and objects,
//                  then assign them to variables in a convienient way
//                  [] = to perform array destructuring
//                  {} = to perform object destructuring 


// --------EXAMPLE 1--------
// SWAP THE VALUE OF TWO VARIABLES

/*
let a =1;
let b=2;

[a,b] = [b,a];

console.log(a); //2
console.log(b); //1
*/

// SWAP 2 ELEMENTS IN AN ARRAY 

/*
const colors =["red","green","blue","black","white"];

[colors[0],colors[4]] = [colors[4],colors[0]];

console.log(colors);

const [firstColor , secondColor , thirdColor , ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
*/

