// closure = A function defined inside of another function,
//           the inner function has access to the variables
//           and scope of the outer function.
//           Allow for private variables and state maintenance 
//           Used frequently in JS frameworks: React , Angular , Vue 

// ----EXAMPLE 1----
/*
function outer(){
    let message = "Hello";
    
    function inner(){
        console.log(message);
    }

    inner();
}

message = "GoodBye!";

outer();
*/

// EXAMPLE 2

/*
function createCounter(){

    let count =0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);

    }

    function getCount(){
        return count;
    }

    return { increment , getCount };

}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

counter.count =0;
console.log(`The current count is ${counter.getCount()}`);
*/

// ---- EXAMPLE 3 ----

function createGame(){

    let score = 0;
    
    function incrScore(points){
        score += points;
        console.log(`+${points}pts`);
    }
    
    function decrScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }
    
    function getScore(){
        return score;
    }

    return {incrScore,decrScore,getScore};
}

const game = createGame();

game.incrScore(5);
game.incrScore(5);
game.decrScore(2);

console.log(`The final score is ${game.getScore()}`);

