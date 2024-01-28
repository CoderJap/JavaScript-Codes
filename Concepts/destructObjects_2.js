// ----- EXTRACT VALUES FROM OBJECTS----

const person1 = {
    firstName: "Spongebob",
    lastName:"Squarepants",
    age:30,
    job: "fry cook",
    }

    const person2 ={
        firstName:"Patrick",
        lastName:"Star",
        age:34,
    }

const { firstName , lastName , age, job="Unemployed"} = person2;
-
/*
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
*/

// ----- DESTRUCTURE IN FUNCTION EXPRESSION----

function displayPerson({firstName,lastName,age,job="Unemployed"}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person2);
displayPerson(person1);