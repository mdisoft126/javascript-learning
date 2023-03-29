//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 5 from new book and then continue from 8

////// Classes and Modules
//// Subclassing

//// Mixins using object (not in book)

// define a mixin object
const myMixin = {
    doSomething() {
        console.log("Doing something..");
    },
    name: "Marcin"
}

// define a class that uses the mixin
class MyClass {};

// Mixin the functionality into the class
Object.assign(MyClass.prototype, myMixin);

// create an instance of the class and call the mixed-in method and field
const obj = new MyClass();
console.log(obj.name);
obj.doSomething();


// Next Chaper 8 - Modules 272