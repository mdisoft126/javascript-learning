//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

// extend by copying object
function extendCopy(p) {
    var c = {};
    for(var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
    return c;
}

//// Create objects (no constructors)
// grand parent
var shape = {
    name: 'shape',
    toString: function() {return this.name}
}

// parent
var shape2d = extendCopy(shape);
shape2d.name = 'shape 2d';
shape2d.toString = function() {return this.uber.toString() + ', ' + this.name};

// child
var triangle = extendCopy(shape2d);
triangle.name = 'triangle';
triangle.toString = function() {return this.uber.toString() + ', ' + this.name};
triangle.side = 10;
triangle.heght = 7;
triangle.getArea = function() {return this.side * this.heght / 2};

console.log(shape.name);
console.log(shape2d.name);
console.log(triangle.name);
console.log('\n');

console.log(shape.toString());
console.log(shape2d.toString());
console.log(triangle.toString());

// Page 187 next --> Deep copying