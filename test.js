//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix E: Answers to Exercise Questions
////// Chapter 5, Prototype
//// 1

// object shape
var shape = {
    type: 'shape',
    getType: function() {
        return this.type;
    }
}

// constructor Triangle
function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

// set the prototype of Triangle to shape
Triangle.prototype = Object.create(shape);  // in this case we are creating a seperate object and we are not overwriting the shape properties
// Triangle.prototype = shape;              // in this case we directly assign shape as a prototype of Triangle. It means that from Triangle level we can change properties on shape.
Triangle.prototype.constructor = Triangle;
Triangle.prototype.type = 'triangle';

// create instances of Triangle
var triangle1 = new Triangle(1,2,3);
var triangle2 = new Triangle(4,5,6);

// test
console.log(shape);
console.log(triangle1);
console.log(triangle2);
console.log(triangle2.constructor);
console.log(triangle2.type);
console.log(triangle2.getType());
console.log(shape.type); // output: 'shape' if creating a seperate object and 'triangle' if only assigning prototype


//////////// it is not clear so I came back to the description. page 205


// Next

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip