let roll;


document.getElementById("rollBtn").onclick = function(){
    roll = Math.floor(Math.random()*6) + 1;

    document.getElementById("countLabel").innerHTML = roll ;
}


console.log("")