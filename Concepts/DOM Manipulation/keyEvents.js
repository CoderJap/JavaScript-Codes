// event Listener = Listen for specific events to create interactive web pages 
//                  events: keydown, keyup
//                  document.addEventListener(event , callback)


// ----- KEY DOWN----- (Whenever we press any key, then this event starts)

document.addEventListener("keydown", event => {
    conosle.log(`Key down = ${event.key}`);
});

// ----- KEY UP ----- (Whenever we release any key, then this event starts)

document.addEventListener("keyup", event => {
    conosle.log(`Key up = ${event.key}`);
});
