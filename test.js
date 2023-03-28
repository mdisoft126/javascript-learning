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

// cannot use comma
class NoCommas {
    method1() {}
    member1;
    // member2, // comma is not allowed. There is an error.
    member3;
}

// using classes via "new" keyword
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}
const ford = new Car("focus", 2015);
console.log(ford.model);
console.log(ford.year);

// Next Chaper 8 - Constructor page 266