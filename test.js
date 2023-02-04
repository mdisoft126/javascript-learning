//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

//// Borrowing a constructor - with prototype inheritance

// Shape constructor
function Shape(id) {
    this.id = id;
}
Shape.prototype.name = 'shape';
Shape.prototype.size = 4;
Shape.prototype.toString = function() {return this.name};

// Triangle constructor
function Triangle() {
    Shape.apply(this, arguments);
}
Triangle.prototype = new Shape(); ///////// thanks for that, new object inherits prototype as well
Triangle.prototype.name = 'triangle';

var t = new Triangle(100);
console.log(t.id);
console.log(t.name);
console.log(t.size); // Shape prototype was not inherited
console.log(t.toString()); // Shape prototype was not inherited
console.log('\n');

var a = new Shape(200);
console.log(a.id);
console.log(a.name);
console.log(a.size); // Shape prototype was not inherited
console.log(a.toString()); // Shape prototype was not inherited
console.log('\n');

var t = new Triangle(100);
console.log(t.id);
console.log(t.name);
console.log(t.size); // Shape prototype was not inherited
console.log(t.toString()); // Shape prototype was not inherited
console.log('\n');

console.log(t.name);
console.log(t.__proto__.name);
console.log(t.constructor.prototype.name);
console.log('\n');

console.log(delete t.name);
// console.log(delete t.__proto__.name);
// console.log(delete t.constructor.prototype.name);
console.log('\n');

console.log(t.name);
console.log(t.__proto__.name);
console.log(t.constructor.prototype.name);
console.log('\n');


// Page 196 next --> Borrowing a constructor - borrow a constructor and copy its prototype