//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// Summary

////// 10. Parasitic inheritance
// object
var shape = {
    name: 'shape',
    toString: function() {return this.name}
}


// function parasite()
function parasite(s, h) {
    var that = Object(shape);
    that.name = 'parasite';
    that.size = 4;
    that.side = s;
    that.height = h;
    that.getArea = function() {return this.side * this.height / 2};
    return that;
}

var a = parasite(5, 10);
console.log(a.name);
console.log(a.toString());
console.log(a.size);
console.log(a.getArea());

// checking if object values are overwritten --> ////// values from origin object are overwritten

console.log(shape.name);
console.log(shape.toString());

// Page 198 next --> 11. Borrowing of constructors