// error -> An object is created to represent a problem that occurs
//          Occur often with user input or establishing a connection

// try{ } = Encloses code that might potentially cause an error
// catach{ } = Catch and handle any thrown Errors from try{ }
// finally{ } = (optional) Always executes. Used mostly for clean up
//               ex. close files, close connections, release resources

// ---EXAMPLE 1---

/*
try {
    
    //console.log("hello");
    console.log(x); // error statement
}
catch(error){
    console.error(error);
}
finally{
    console.log("This is always executed");
}


console.log("You have reached end!");
*/

// ----EXAMPLE 2----

try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor==0){
        throw new Error("You can't divide by zero");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("values must be a number");
    }

    const result = dividend/divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("You have reached the end!");
