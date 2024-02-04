const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

/*
myButton.addEventListener("mouseover", event =>{
    event.target.classList.toggle("hover");
})

myButton.addEventListener("mouseout", event =>{
    event.target.classList.toggle("hover");
})
*/

myButton.classList.add("enabled");

myButton.addEventListener("click", event =>{
    if(event.target.classList.contains("disabled")){
        event.target.classList.replace("disabled","enabled");
    }
    else{
        event.target.classList.replace("enabled","disabled");
    } 
});


