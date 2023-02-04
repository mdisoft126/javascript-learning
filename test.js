//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

//// Borrowing a constructor - borrow a constructor and copy its prototype

// function extend2 --> taking parameters from parent constructor
function extend2(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
}

// constructor Shape
function Shape(id) {
    this.id = id;
}
Shape.prototype.name = 'shape';
Shape.prototype.size = 45;
Shape.prototype.toString = function() {return this.name};

// constructor Triangle
function Triangle() {
    Shape.apply(this, arguments);
}
extend2(Triangle, Shape);
Triangle.prototype.name = 'triangle';

////
var a = new Triangle(200);
console.log(a.id);
console.log(a.name);
console.log(a.size);
console.log(a.toString());
console.log(a.uber.name);
console.log('\n');

console.log(a.id);
console.log(a.__proto__.id);                //// without double inheritance (it is better now)
console.log(a.constructor.prototype.id);    //// without double inheritance (it is better now)
console.log(a.uber.name);

// Page 197 next --> Summary