// nested objects - Objects inside of other Objects
//                  Allows you to represent more complex data structures
//                  Child object is enclosed by a Parent Object

//                  Person{Address{},ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// ---- EXAMPLE 1----

/*
const person ={
    fullName:"Spongebob Squarepants",
    age:30,
    isStudent:true,
    hobbies: ["Karate", "jellyfishing","cooking"],
    address: {
        street: "124 Conch St.",
        city: "Lake Down",
        country : "Int. Water"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
// console.log(person.address.city);
// console.log(person.address.country);

// for looping thru properties in object
for(const property in person.address){
    console.log(person.address[property]);
}
*/

// ----EXAMPLE 2----

class Person{
    constructor(name ,age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }

}

class Address{
    constructor(street , city , country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Mark",30,"Wall Street",
                                     "Lake pearl",
                                     "Int. Walls");

const person2 = new Person("Peter",3,"Journal Street",
                                     "City Town",
                                     "Blueberry Site");



console.log(person2.address.city);
console.log(person1.address.country);