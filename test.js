//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 6 Inheritance

function Shape() {};
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {
    return this.name;
}

function Shape2D() {};
Shape2D.prototype = Shape.prototype; // reference to the prototype instead to the whole object
// Shape2D.prototype = new Shape(); // previous way
Shape2D.prototype.constructor = Shape2D;
Shape2D.prototype.name = 'shape 2d';

function Triangle(side, height) {
    this.side = side;
    this.height = height;
}
Triangle.prototype = Shape2D.prototype; // reference to the prototype instead to the whole object
// Triangle.prototype = new Shape2D(); // previous way
Triangle.prototype.constructor = Shape2D;
Triangle.prototype.name = 'triangle';
Triangle.prototype.getArea = function() {
    return this.side * this.height / 2;
}

var a = new Triangle(4, 5);

console.log(a.name);
console.log(a.getArea());

//// check the name for Shape
var f = new Shape();
console.log(f.name); // triangle --->>> it means that by using reference we overwrite the value from prototypes

// Inheriting the prototype itself

// Page 178 --> next temporary constructor new F()