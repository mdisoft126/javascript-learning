//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// Summary

////// 12. Borrowing a constructor and copying his prototype
// function copyPrototypes()
function copyPrototypes(Child, Parent) {
    var c = Child.prototype;
    var p = Parent.prototype;
    for(var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
}

// constructor Shape
function Shape(id) {
    this.id = id;
}
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {return this.name};

// constructor Triangle
function Triangle() {
    Shape.apply(this, arguments);
}
copyPrototypes(Triangle, Shape);
Triangle.prototype.name = 'triangle';

// call
var a = new Triangle();
console.log(a.id);
console.log(a.name);
console.log(a.toString());

// check if paren't value overwritten
console.log(Shape.prototype.name);  // not, it is not overwritten

// check if double inheritance
console.log(typeof a.__proto__.id); // no, there is no double inheritance

// additionally tere is an access to parent's value by uber
console.log(a.uber.name);


// Page 200 next --> Case study: we draw shapes