// Async/Await = Async = makes a function return apromise
//               Await = makes an async function wait for a promise 

//               Allows you write asynchronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters 
//               Everything after Await is placed in a event queue

function walkDog(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogWalked = false;
            if(dogWalked){
                resolve("You walk the dog") 
            }
            else {
                reject("dog didn't walked")
            }
        },1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You cleaned the kitchen")
            }
            else {
                reject("Kitchen not cleaned")
            }
        },2500)
    })
};

function takeOutTrash(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const trashTakenOut = false;
            if(trashTakenOut){
                resolve("You took out the trash")
            }
            else {
                reject("Trash didn't took out")
            }   
        },500)
    })
};

async function doChores() {

    try {
        const dogWalkedResult = await walkDog();
        console.log(dogWalkedResult)
    
        const kitchenCleanedResult = await cleanKitchen();
        console.log(kitchenCleanedResult)
    
        const trashTakenOutResult = await takeOutTrash();
        console.log(trashTakenOutResult);
    
        console.log("All chores completed")
    }
    catch(error){
        console.error(error);
    }
}

doChores()