const fruits = [{name:"goldenApple", color:"yellow",calories: 95},
                {name:"orange", color:"orange",calories: 56},
                {name:"guava", color:"green",calories: 67},
                {name:"banana", color:"yellow",calories: 77}
               ];

fruits.pop(); // removes banana since its in end
fruits.push({name:"grapes", color:"purple",calories:123});
// console.log(fruits);

// -------FOR EACH------
// fruits.forEach(fruit=>console.log(fruit.calories));

// -------MAP---------
const fruitNames = fruits.map(fruit=>fruit.name);
// console.log(fruitNames);

// ------FILTER-------
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
//console.log(yellowFruits);

// ------REDUCE()-----

const maxFruit = fruits.reduce((max,fruit)=>
                                fruit.calories > max.calories ? fruit : max);
console.log(maxFruit); // fruit wirh max calories 

                                
