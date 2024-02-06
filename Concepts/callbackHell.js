// Callback Hell - Situation in JavaScript where callbacks 
//                 are nested within other callbacks to the 
//                 degree where the code is difficult to read.
//                 Old pattern to handle asynchronous functions.
//                 Use Promises + async/await to avoid Callback Hell

function task1(callback){
    setTimeout(()=>{
        console.log("Task 1 is complete")
        callback();
    },2000);
   
}

function task2(callback){
    setTimeout(()=>{
        console.log("Task 2 is complete")
        callback();
    },1000);
    
}

function task3(callback){
    setTimeout(()=>{
        console.log("Task 3 is complete")
        callback();
    },4000);

}

function task4(callback){
    setTimeout(()=>{
        console.log("Task 4 is complete")
        callback();
    },3000);

}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("All Tasks complete")
            })
        })
    })
})
