// Promises - An Object that manages asynchronous operations.
//            Wrap a Promise Object around {asynchronous code}
//            "I promise to return a value"
//            PENDING -> RESOLVED or REJECTED
//            new Promise((resolve,reject)) => {asynchronous code})

// DO THESE CHORES IN ORDER 

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN 
// 3. TAKE OUT THE TRASH

/* CALLBACK HELL 

function walkDog(callback){
    setTimeout(()=>{
        console.log("You walk the dog")
        callback();
    },1500);

}

function cleanKitchen(callback){
    setTimeout(()=>{
        console.log("You cleaned the kitchen")
        callback();
    },2500)
};

function takeOutTrash(callback){
    setTimeout(()=>{
        console.log("You took out the trash")
        callback();
    },500)
};


walkDog(()=>{
    cleanKitchen(()=>{
        takeOutTrash(()=>{
            console.log("You finished all the chores")

        })
    })
})

*/

// PROMISES 

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

walkDog().then( value=>{
    console.log(value);
    return cleanKitchen();
}).then(value=>{
    console.log(value);
    return takeOutTrash();
}).then(value =>{
    console.log(value);
    console.log("All chores completed");
}).catch(error =>{
    console.log(error);
})


