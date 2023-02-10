//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// Summary

////// 9. Multiple inheritance
// function multi()
function multi() {
    var n = {}, stuff, j, len = arguments.length;
    for(j = 0; j < len; j++) {
        stuff = arguments[j];
        for(i in stuff) {
            n[i] = stuff[i]
        }
    }
    return n;
}
//// objects
// shape
var shape = {
    name: 'shape',
    toString: function() {return this.name}
}

// shape2d
var shape2d = {
    name: 'shape2d',
    size: 4
}

// triangle
var triangle = {
    name: 'triangle',
    side: 0,
    height: 0,
    getArea: function() {return this.side * this.height / 2}
}

//// result a
var a = multi(shape, shape2d, triangle);
console.log(a.name); 
console.log(a.toString()); 
console.log(a.size); 
console.log(a.getArea());
console.log('\n');

//// result b
var b = multi(shape, shape2d, triangle, {side: 8, height: 8});
console.log(b.toString());
console.log(b.getArea());
console.log('\n');

// check if parent's values overwritten ---> ///// no, paren't values are not overwritten
console.log(shape.name);
console.log(triangle.getArea());

// Page 198 next --> 10. Parasitic inheritance