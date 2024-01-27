// class -> (ES6 Feature) provides a more structured and cleaner way to
//          work with objects compared to traditional constructor functions
//          ex. static keyword , encapsulation , inheritance 


class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    // inside class there is no use of function keyword 
    displayProduct(){
        console.log(`Product is: ${this.name}`);
        console.log(`Price is: ${this.price.toFixed(2)}`);
    }

    calcTotal(salexTax){
        return this.price + (this.price*salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt",19.99);
const product2 = new Product("Pants",22.50);
const product3 = new Product("Jacket",100.00)

/*
product1.displayProduct();
product2.displayProduct();
product3.displayProduct();
*/

const total = product1.calcTotal(salesTax);
console.log(`Total price (with tax): ${total.toFixed(2)}`);


