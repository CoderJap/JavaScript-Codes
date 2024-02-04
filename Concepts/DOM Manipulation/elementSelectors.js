// element Selectors -> Methods used to target and manipulate HTML elements 
//                      They allow you to select one or multiple HTML elements
//                      from the DOM( Document Object Model )

// 1. document.getElementById()            -> ELEMENT OR NULL
// 1. document.getElementsByClassName()    -> HTML Collection
// 1. document.getElementsByTagName()      -> HTML Collection
// 1. document.querySelector()             -> FIRST MATCHING ELEMENT OR NULL
// 1. document.querySelectorAll()          -> NODELIST

// ----ID---- 

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);


// ----CLASSES---- 

const fruits = document.getElementsByClassName("fruits");

for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}

// to use for each , we need to convert these fruits into an array 
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
})


// ----Tag Names---- 

const h4Elements = document.getElementsByTagName("h4");
// we can target individual h4 elemenents we can use indexes as shown below :-
h4Elements[0].style.backgroundColor = "yellow";

// To target all the elements, we can use the for loop :-
for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "yellow";
}

// To use forEach here , we have to typecast it to an array :-

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
});


// ----QUERY SELECTOR----

const element1 = document.querySelector(".fruits"); // this will select the first matching element of a class/tags.
const element2 = document.querySelector("h4");

// ----QUERY SELECTOR ALL----

const foods = docuument.querySelector("li");

// we can use indexes to target individual element
foods[0].style.backgroundColor ="yellow";

// we can also directly use the forEach() method
foods.forEach(food =>{
    food.style.backgroundColor = "yellow";
});





