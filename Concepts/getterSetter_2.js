

class Person{

    constructor(firstName , lastName , age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length>0){
            this._firstName = newFirstName;
        }
        else{
            console.log("First name must be a non-empty string")

        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length>0){
            this._lastName = newLastName;
        }
        else{
            console.log("last name must be a non-empty string")
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >=0){
            this._age = newAge;
        }
        else {
            console.log("Entered age is invalid")
        }
    }

    get age(){
        return this._age;
    }

    get lastName(){
        return this._lastName;
    }

    get firstName(){
        return this._firstName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName; 
    }
}

// const person = new Person(420,69,"pizza");
const person = new Person("Coder","Boy",18);


console.log(person.firstName);
console.log(person.lastName);
console.log(person.age)
console.log(person.fullName)
