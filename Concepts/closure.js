// closure = A function defined inside of another function,
//           the inner function has access to the variables
//           and scope of the outer function.
//           Allow for private variables and state maintenance 
//           Used frequently in JS frameworks: React , Angular , Vue 

function outer(){
    let message = "Hello";
    
    function inner(){
        console.log(message);
    }

    inner();
}

message = "GoodBye!";

outer();