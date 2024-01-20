let max = 100;
let min = 1;
let answer = Math.floor(Math.random() * (max - min +1) ) + min;

let guess;
let running = true;
let attempts = 0;


while(running){
    guess = window.prompt(`Guess Number between ${min} and ${max}:`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Invalid Number");
    }
    else if(guess < min || guess > max){
        window.alert("Invalid Number");
    }
    else { // valid number hai 
        attempts ++;
        if(guess < answer ){
            window.alert("Too Low! ");
        }
        else if(guess > answer){
            window.alert("Too High!")
        }
        else {
            window.alert(`CORRECT! Answer is ${answer} , you have guessed in ${attempts} attempts `);
            running = false;
            
        }

    }
    


}


