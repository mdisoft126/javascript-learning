//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// Summary

////// 7. Prototype inheritance
// function object()
function object(o) {
    function F() {};
    F.prototype = o;
    return new F();
}

// function objectWithParent() --> with uber
function objectWithParent(o) {
    var n;
    function F() {};
    F.prototype = o;
    n = new F();
    n.uber = o;
    return n; 
}

// object
var parent = {
    name: 'parent',
    toString: function() {return this.name}
}

// create child object and inherite fields an methods from parent
var child = object(parent);

child.name = "child";

console.log(child.name);
console.log(child.toString());
console.log('\n');

console.log(parent.name);
console.log(parent.toString());
console.log('\n');

//// with uber
// objetc with uber
var parentU = {
    name: 'parent uber',
    toString: function() {return this.name}
}

// child with uber
var childU = objectWithParent(parentU);
childU.name = 'childU uber';

console.log(childU.name);
console.log(childU.toString());
console.log(childU.uber.name);


// Page 198 next --> 8. The combination of prototypical inheritance with field duplication