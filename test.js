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

//// Proptotype methods
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
// define propotype
Person.prototype.sayGoodbye = function() {
    console.log(`Goodbye ${this.name}.`);
}

// create a person object
const person = new Person("Marcin");

// call sayHello method
person.sayHello();

// call sayGoodbyew method --> defined on the proptotype
person.sayGoodbye();

// Next Chaper 8 - Static methods page 267