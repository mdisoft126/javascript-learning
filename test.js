//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 5 from new book and then continue from 8

////// Classes and Modules
//// Defining Classes

// Define usin class expression
var Car = class {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}

var car = new Car("honda", 1991);
console.log(car.model);
console.log(car.year);

// we can name the class but it is only locally visible
var NamedCar = class Car2 {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    getName() {
        return Car2.name;
    }
}

var ford = new NamedCar("Ford", 2015);
console.log(ford.model);
console.log(ford.getName());
console.log(ford.name); // Reference is not defined

// Next Chaper 8 - Constructor page 266