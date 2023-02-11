//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// Summary

////// 11. Borrowing of constructors - with prototypes
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
Triangle.prototype = new Shape(); //////////// --> a change compared to version without prototypes
Triangle.prototype.name = 'triangle';

// call
var a = new Triangle(44);
console.log(a.id);
console.log(a.name);
console.log(a.toString());  // this time "a" can see toString because the prototypes are also borrowed from Triangle. 
                            // In this method we borrowing constructors with prototypes
                            

// Page 198 next --> 12. Borrowing a constructor and copying his prototype