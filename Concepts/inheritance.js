// inheritance -> allows a new class to inherit properties and methods 
//               from an existing class (parent -> child)
//               helps with code reusability


class Animal {
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`)
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }

}

class Rabbit extends Animal{
    name = "rabbit";
}
class Fish extends Animal{
    name = "fish";
}
class Hawk extends Animal{
    name = "hawk";
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
fish.eat();
hawk.sleep();
