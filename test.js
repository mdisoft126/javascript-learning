//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

//// Summary

////// 1. Prototype chaining (pseudo-class pattern)
function Parent() {
    this.name = 'parent';
    this.toString = function() {return this.name};
}
Parent.size = 4; //// <----

function Child() {
    this.name = 'child';
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

var a = new Child();
var b = new Parent();

console.log(a.toString());  // result: child
console.log(a.size);        // result: undefined --> because Parent.size was created as own field in Parent object 
console.log(b.name);        // children can't change the parent's functionality

//////


// Page 200 next --> Case study: we draw shapes - analysis