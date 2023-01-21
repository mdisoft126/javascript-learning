//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 6 Inheritance

function Shape() {};

// prototype extending
Shape.prototype.name = 'figure';
Shape.prototype.toString = function() {
    return this.name;
}

//// good sequence, first inheritance, then prototype extending

// Shape2D
function Shape2D() {};

// inheritance handling
Shape2D.prototype = new Shape();
Shape2D.prototype.constructor = Shape2D;

// prototype extending
Shape2D.prototype.name = 'figure2d';

// Triangle
function Triangle(side, height) {
    this.side = side;
    this.height = height;
}

// inheritance handling
Triangle.prototype = new Shape2D();
Triangle.prototype.constructor = Triangle;

// prototype extending
Triangle.prototype.name = 'triangle';
Triangle.prototype.getArea = function() {
    return this.side * this.height / 2;
}

var t = new Triangle(4, 5);
console.log(t.name);
console.log(t.getArea());
console.log(t.toString());
console.log('\n');

//// checking if own property
console.log(t.hasOwnProperty('side')); // true
console.log(t.hasOwnProperty('name')); // false
console.log('\n');

//// checking if prototype
console.log(Shape2D.prototype.isPrototypeOf(t));
console.log(Shape.prototype.isPrototypeOf(t));
console.log('\n');

//// instanceof
console.log(t instanceof Triangle);
console.log(t instanceof Shape2D);
console.log(t instanceof Shape);


// Page 177