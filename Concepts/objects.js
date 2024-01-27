// objects = A collection of related properties and/or methods
//           Can represent real world objects (people, products, places)
//           object ={Key:value,
//                    function()}

const person1 = {
    firstName: "Spongebob",
    lastName:"Squarepants",
    age:30,
    isEmployed:true,
    sayHello: function(){
        console.log("Hi! I am Spongebob!")
    },
    sayBye: function(){
        console.log("GoodBye!")
    }
};

const person2 = {
    firstName: "Patrick",
    lastName:"Star",
    age:42,
    isEmployed:false,
    sayHello: () => {
        console.log("Hi! I am Patrick...!")
    },
    sayBye: () => {
        console.log("GoodBye ...!")
    }
};

// person 1 console.log statements

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.sayBye();

// person2 console.log statements

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.sayBye();