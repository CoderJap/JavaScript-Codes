// setTimeout() -> function in js that allows you to schedule
//                 the execution of a function after an amount of time (miliseconds)
//                 Times are approximate (varies based on the workload of the js runtime env.)

//                 setTimeout(callback , delay);
//                 clearTimeout(timeoutId) = can cancel a timeoutbefore it triggers

const timeoutId = setTimeout(()=>{
    console.log("Hello in 5 seconds");
},5000);

clearTimeout(timeoutId);




