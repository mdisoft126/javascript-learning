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

// var shape = {
//     type: 'shape',
//     getType: function() {
//         return this.type;
//     }
// }

// function Triangle(a, b, c) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
// }

// Triangle.prototype = shape;
// Triangle.prototype.constructor = Triangle;
// Triangle.prototype.type = 'triangle';

// console.log(shape);

var shape = {
    type: 'shape',
    getType: function() {
        return this.type;
    }
}

function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;

// Set a separate getType method for the shape object
shape.getType = function() {
    return this.type;
};

Triangle.prototype.type = 'triangle';

console.log(shape.getType()); // Output: 'shape'
console.log(new Triangle(3, 4, 5).getType()); // Output: 'triangle'


//////////// it is not clear so I came back to the description. page 205


// Next

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip