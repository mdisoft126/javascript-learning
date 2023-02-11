//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// Summary

////// 11. Borrowing of constructors - without prototypes
// contructor Shape
function Shape(id) {
    this.id = id;
}
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {return this.name};

// constructor Triangle --> borrowing the constructor from Shape
function Triangle() {
    Shape.apply(this, arguments);
}
Triangle.prototype.name = 'triangle';

// call
var a = new Triangle(44);
console.log(a.id);
console.log(a.name);
console.log(a.toString());  // "a" can't see toString because it was not borrowed from Triangle. 
                            // In this method we borrowing constructors but without prototypes
                            

// Page 198 next --> 12. Borrowing a constructor and copying his prototype