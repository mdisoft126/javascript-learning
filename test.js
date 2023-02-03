//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

//// The combination of prototypical inheritance with field duplication

// function for cloning and aldo copying fields
function objectPlus(o, additions) {
    var n;
    function F() {};
    F.prototype = o;
    n = new F();
    n.uber = o;
    for (var i in additions) {
        n[i] = additions[i];
    }
    return n;
}

// shape object
var shape = {
    name: 'shape',
    toString: function() {return this.name}
}

// shape 2d
var shape2d = objectPlus(shape, {
    name: 'sahep 2d',
    toString: function() {return this.uber.toString() + ', ' + this.name}
})

// triangle
var triangle = objectPlus(shape2d, {
    name: 'triangle',
    toString: function() {return this.uber.toString() + ', ' + this.name},
    side: 0,
    height: 0,
    getArea: function() {
        return this.side * this.height / 2;
    }
})

var a = objectPlus(triangle, {
    // name: 'aaaaaa', ///////////// --> if it is not added the the value is inherited from parent.
    side: 5,
    height: 4,
    toString: function() {return this.uber.toString() + ', ' + this.name}
})

console.log(a.getArea());
console.log(a.toString());
console.log(a.name);

// Page 191 next --> Multiple inheritance