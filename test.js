//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// Summary

////// 8. The combination of prototypical inheritance with field duplication
// function inheritAndCopy()
function inheritAndCopy(o, addition) {
    var n;
    function F() {};
    F.prototype = o;
    n = new F();
    n.uber = o;
    for(var i in addition) {
        n[i] = addition[i];
    }
    return n;
}

// object shape
var shape = {
    name: 'shape',
    toString: function() {return this.name}
}

// object shappe2d
var shape2d = inheritAndCopy(shape, {
    name: 'shape2d',
    toString: function() {return this.uber.toString() + ', ' + this.name},
    size: 4
})

// object triangle
var triangle = inheritAndCopy(shape2d, {
    name: 'triangle',
    getArea: function() {return this.side * this.height / 2}
})

// call object a
var a = inheritAndCopy(triangle, {
    side: 4,
    height: 8,
    name: 'a'
})

console.log(a.getArea()); // result: 16
console.log(a.toString()); // result: shape, shape2d, triangle, a
console.log('\n');

// check if not overwritten parent's values --> /////// parent's valuies are not overwritten
console.log(shape.name);
console.log(shape.toString());
console.log(shape2d.name);
console.log(shape2d.toString());


// Page 198 next --> 9. Multiple inheritance