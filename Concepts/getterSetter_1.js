// getter -> special method that makes a property readable
// setter -> special method that makes a property writeable 

// validates and modify a avalue when reading/writing a property 


class rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }

    set height(newHeight){
        if(newHeight>0){
            this._height = newHeight;
        }
        else{
            console.log("Height must be a positive number")
        }
    }
    set width(newWidth){
        if(newWidth>0){
            this._width = newWidth;
        }
        else{
            console.log("Width must be a positive number")
        }
    }

    get height(){
        return this._height;
    }

    get width(){
        return this._width;
    }

    get area(){
        return this._height * this._width;
    }

}

const Rectangle = new rectangle(10000,12);

Rectangle.width = 27;
Rectangle.height = 77;

console.log(Rectangle.height)
console.log(Rectangle.width)
console.log(Rectangle.area)