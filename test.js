//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 5 Prototypes - Exercise 2, 3, 4, 5

// prototype for Triangle
var shape = {
    type: 'triangle',
    getType: function() {
        return this.type;
    }
}

// Constructor
function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

// assign prototype shape to Triangle
Triangle.prototype = shape; 

// add a new method to prototype
shape.getCircuit = function() {
    return this.a + this.b + this.c;
}

var t = new Triangle(1, 2, 3);
console.log(t.a);
console.log(t.b);
console.log(t.c);
console.log(t.type);
console.log(t.getType());
console.log(t.getCircuit());
console.log(t.constructor);
console.log(t.constructor.prototype.constructor);
console.log(shape.isPrototypeOf(t));
console.log(t.own);

// has own property
for (var f in t) {
    if (t.hasOwnProperty(f)) {
        console.log(f);
    }
}



// Page 170 --> exercises;