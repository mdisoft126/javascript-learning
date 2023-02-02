//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

//// inheritance using Object() method
// function Object (without uber)
function object(o) {
    function F() {};
    F.prototype = o;
    return new F();
}

// grand parent
var shape = {
    name: 'shape',
    obj: {1:'a', 2:'b'},
    toString: function() {return this.name}
}

// parent
var shape2d = object(shape);
shape2d.name = 'shape 2d';
shape2d.obj= {3:'c', 4:'d'};
// shape2d.toString = function() {return this.uber.toString() + ', ' + this.name};

// child
var triangle = object(shape2d);
triangle.name = 'triangle';
triangle.obj= {5:'e', 6:'f'};
// triangle.toString = function() {return this.uber.toString() + ', ' + this.name};
triangle.side = 10;
triangle.heght = 7;
triangle.getArea = function() {return this.side * this.heght / 2};

console.log(shape.name);
console.log(shape2d.name);
console.log(triangle.name);
console.log('\n');

console.log(shape.obj);
console.log(shape2d.obj);
console.log(triangle.obj);
console.log(triangle.obj['3'] = 'c');
console.log(triangle.obj);
console.log(shape.obj);


// Page 189 next --> Object()