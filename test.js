//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 6 Inheritance

function Shape() {};
Shape.prototype.name = 'Shape';
Shape.prototype.experience = 'only Shape';

function Triangle() {};
Triangle.prototype.name = 'Triangle';
Triangle.prototype.brave = 'Triangle only Triangle'

var p = new Shape();
console.log(p.name);
console.log(p.experience);
console.log(p.brave);

var c = new Triangle();
console.log(c.name);
console.log(c.brave);
console.log(c.experience);

console.log('\n');

function extend(Child, Parent) {
    var F = function() {};
    F.prototype = Shape.prototype;
    Triangle.prototype = new F();
    Triangle.prototype.constructor = Triangle;
    Triangle.uber = Shape.prototype;
}

extend(Triangle, Shape);

var p1 = new Shape();
console.log(p1.name);
console.log(p1.experience);
console.log(p1.brave);

console.log('\n');

var c1 = new Triangle();
console.log(c1.name);
console.log(c1.brave);
console.log(c1.experience);

// Page 181 --> Closing inheritance inside a function