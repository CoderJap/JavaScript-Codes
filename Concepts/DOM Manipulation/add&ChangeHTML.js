// ---------- EXAMPLE 1 <h1> --------------

// --- STEP 1 CREATE THE ELEMENT --- 
const newH1 = document.createElement("h1");

// --- STEP 2 ADD ATTRIBUTES/PROPERTIES ---
newH1.textContent = "I like Pizza";
newH1.id = "myH1"; // to set this id to h1 tag
newH1.style.color = "tomato"; // to set styling 
newH1.style.textAlign = "center";

// --- STEP 3 APPEND ELEMENT TO DOM ---

document.body.append(newH1); // when append -> then this becomes the last child. 
document.body.prepend(newH1);   // when prepend -> then this becomes the first child.

// To append this h1 element inside some box then 

document.getElementById("box1").append(newH1); // now this will become last child in box1 
document.getElementById("box1").prepend(newH1);// now this will become first child in box 1 

// To insert element between 2 other things 

const box1 = document.getElementById("box1");
document.body.insertBefore(newH1,box1);

// Can use query selector here,

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1,boxes[1]);

// --- REMOVE HTML ELEMENT ---
document.body.removeChild(newH1);

// If the parent of the element is box 1 then,
document.getElementById("box1").removeChild(newH1);

// to remove basically select the parent of the lement and then follow it with removeChild method in which you will pass the element to be removed as an argument


