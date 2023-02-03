//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

//// Multiple inheritance

// function multi --> can copy inheritance/copy multiple objects at once
// version without uber
function multi() {
    var n = {}, extras, j = 0, len = arguments.length;
    for (j = 0; j < len; j++) {
        extras = arguments[j];
        for (var i in extras) {
            n[i] = extras[i]
        }
    }
    return n;
}

//// version without uber
// shape
var shape = {
    name: 'shape',
    toString: function() {return this.name}
}

// shape 2d
var shape2d = {
    name: 'shape2d',
    size: 'large'
}

// triangle
var triangle = {
    name: 'triangle',
    getArea: function(side, height) {return side * height / 2}
}

var a = multi(shape, shape2d, triangle);

console.log(a.name);
console.log(a.toString());
console.log(a.size);
console.log(a.getArea(4, 7));

// Page 193 next --> Mixins