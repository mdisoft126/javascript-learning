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

//// Subclassing
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} generic noise.`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} says meow.`);
    }
}

var c = new Cat("Grace");
c.speak();
console.log(c.name);


// Next Chaper 8 - Static properties page 268