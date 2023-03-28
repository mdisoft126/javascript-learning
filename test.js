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

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}

console.log(typeof Car);

//// classes are not hoisted. functions are hoisted
// example from function
test();
function test() {
    console.log("test");
}

//example from class
var house = new House("nice", 150); // error that House is not defined
house.getSize();
class House {
    constructor(building, size) {
        this.building = building;
        this.size = size;
    }
    getSize() {
        console.log(this.size);
    }
}

// Next Chaper 8 - Constructor page 266