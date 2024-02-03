// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JS.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// --------- .firstElementChild --------

// targets the first child of the selected element
const element1 = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor ="yellow";


// -------- .lastElementChild ----------

// tagets the last child of the selected element 
const element2 = document.getElementById("vegetables");
const firstChild = element.lastElementChild;
firstChild.style.backgroundColor ="yellow";

// ---------- .nextElementSibling & .previousElementSibling -----------

// to understand this let's take this html code in consideration shown below:-
/*
    <ul id="fruits">
        <li id="apple">apple </li>
        <li id="apple">apple </li>
        <li id="apple">apple </li>
    </ul>

    <ul id="vegetables"> 
        <li id="carrots">carrots </li>
        <li id="onions">onions </li>
        <li id="potatoes">potatoes </li>
    </ul>

*/

const elementApple = document.getElementById("apple");
const nextSibling = elementApple.nextElementSibling;
nextSibling.style.backgroundColor = "yellow"; // this will change orange bg color 

const elementFruits = document.getElementById("fruits");
const nextSibling = elementFruits.nextElementSibling;
nextSibling.style.backgroundColor = "yellow"; // this will highlight the next unordered list of vegetables 

const elementPotatoes = document.getElementById("potatoes");
const nextSibling = elementPotatoes.nextElementSibling;
nextSibling.style.backgroundColor = "yellow"; // this will highlight nothing as potatoes ahve no next sibling 

// this is same how previousElementSibling will work as
// If you will select onions then prev sibling will be carrots
// If you will select apple then there is no prev sibling for it so nothing will happen
// If you will select the ul of vegetables then it's prev sibling eill be the ul of fruits


// ----------- .parentElement -----------

// This will target the parent element of the selected item

const element3 = document.getElementById("banana");
const parent = element3.parentElement;
parent.style.backgroundColor = "yellow";
// this will target the ul of fruits as parent of apple , banana and orange is fruits

// -------- .children ---------

const element4 = document.getElementById("fruits");
const children = element.children;
console.log(children); // this will return a HTML collection which will have 3 elements which are apple,banana and orange

// to use forEach here , we need to typecast this into an array 
Array.from(children).forEach(child => {
    child.style.backgroundColor ="yellow";
});

// we can also access the children via indexes 
children[1].style.backgroundColor ="yellow";







