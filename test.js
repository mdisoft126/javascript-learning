//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

//// Borrowing a constructor - without prototype inheritance

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
Triangle.prototype.name = 'triangle';

var t = new Triangle(100);
console.log(t.id);
console.log(t.name);
console.log(t.size); // Shape prototype was not inherited
console.log(t.toString()); // Shape prototype was not inherited


// Page 196 next --> Borrowing a constructor - borrow a constructor and copy its prototype