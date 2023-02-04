//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

//// Parasitic inheritance

// normal object
var shape = {
    name: 'shape',
    size: 4
}

// parasite function --> taking everything from parent object and overwrite values on it. Even simple fields are overwritten.
function triangle(s, h) {
    var parasite = Object(shape);
    parasite.name = 'triangle';
    // parasite.size = 3;
    parasite.side = s;
    parasite.height = h;
    parasite.getArea = function() {return this.side * this.height / 2};
    return parasite;
}

var a = triangle(4, 8);
console.log(a.name);
console.log(a.size);
console.log(a.getArea());
console.log('\n');

console.log(shape.name);
// Page 194 next --> Borrowing a constructor