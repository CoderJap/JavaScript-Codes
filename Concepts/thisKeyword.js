// this -> reference to the object where THIS is used 
//         (the object depends on the immediate context)
//         person.name = this.name


const person1 = {
    name:"Spongebob",
    food:"hamburgers",
    eat: function(){
        console.log(`${this.name} is eating ${this.food}`)
    }
}

const person2 = {
    name:"Patrick",
    food:"pizza",
    eat: function(){
        console.log(`${this.name} is eating ${this.food}`)
    }
}

// this keyword does not work with arrow functions.
// Deafault , this keyword will point to window object


person1.eat();
person2.eat();