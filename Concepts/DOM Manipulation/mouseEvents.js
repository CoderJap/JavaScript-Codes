// event Listener = Listen for specific events to create interactive web pages 
//                  events: click , mouseover, mouseout
//                  .addEventListener(event , callback);

// --- CLICK ----

 const myBox = document.getElementById("myBox");
// passing callback like this -

function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Clicked!";
}
myBox.addEventListener("click",changeColor);


// Also can use arrow function -

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Clicked!";
});


// --- MOUSE OVER ---- (jab curso uske upar ayega tab yeh event hoga)

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it";
});

// ---- MOUSE OUT --- ( jab cursor bahar hoga tab yeh event hoga)
myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me";
});
