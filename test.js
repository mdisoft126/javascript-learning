//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 6 Inheritance

//// Shape
function Shape() {};
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {
    return this.name;
}

//// Shahpe2D
function Shape2D() {};

// using auxiliary function F()
var F = function() {};
F.prototype = Shape.prototype;
Shape2D.prototype = new F();

// add prototypes to Shape2d
Shape2D.prototype.constructor = Shape2D;
Shape2D.prototype.name = 'shape2d'

//// Triangle
function Triangle(side, height) {
    this.side = side;
    this.height = height;
}

// using auxiliary function F()
var F = function() {};
F.prototype = Shape2D.prototype;
Triangle.prototype = new F();

// add prototypes to Triangle
Triangle.prototype.constructor = Triangle;
Triangle.prototype.name = 'triangle';
Triangle.prototype.getArea = function() {
    return this.side * this. height / 2;
}

var a = new Triangle(5, 7);
console.log(a.name);
console.log(a.toString());
console.log(a.getArea());

console.log(a.__proto__);
console.log(a.__proto__.__proto__);
console.log(a.__proto__.__proto__.__proto__);

var b = new Shape();
console.log(b.name);

// Page 180 --> next Uber: access to the parent-object