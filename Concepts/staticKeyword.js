// static -> keyword that defines properties or methods that belong
//           to a class itself rather than the objects created 
//           from that class (class owns anything static, not the objects)

// --- EXAMPLE OF ONLY STATIC MEMBERS---

/*
class MathUtil {
    static PI = 3.14159; // this belongs to the class itself and not to object
                         // so we dont need to make any object to access this outside
    
    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
*/

// --- EXAMPLE OF MIXED MEMBERS---

class User{

    static userCount =0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`)
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`)
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

/*
console.log(user1.username);
console.log(user2.username);
console.log(user3.username)
*/

user1.sayHello();
user2.sayHello();
user3.sayHello();


// console.log(User.userCount);
User.getUserCount();

