// event Listener = Listen for specific events to create interactive web pages 
//                  events: keydown, keyup
//                  document.addEventListener(event , callback)


// ----- KEY DOWN----- (When we press any key then this event will start)

document.addEventListener("keydown", event => {
    conosle.log(`Key down = ${event.key}`);
});

document.addEventListener("keyup", event => {
    conosle.log(`Key up = ${event.key}`);
});
