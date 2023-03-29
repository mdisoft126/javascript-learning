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

//// Define using expression
// 1st example
class CarOne {
    driveCar() {console.log("1st")};
}

// 2nd example
class CarTwo {
    ['drive' + 'Car'] () {console.log("2nd")};
}
// 3rd example
const methodName = 'driveCar';
class CarThree {
    [methodName] () {console.log("3rd");}
}

// define classes and call metods
var car1 = new CarOne;
var car2 = new CarTwo;
var car3 = new CarThree;

car1.driveCar();
car2.driveCar();
car3.driveCar();

// Next Chaper 8 - Static methods page 267