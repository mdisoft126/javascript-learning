//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 6 Inheritance

//// Parent
function Parent() {};
Parent.prototype.name = 'parent';
Parent.prototype.getName = function() {
    return this.name;
}

// get direct parent
Parent.prototype.getParentName = function() {
    return this.constructor.uber.name;
}

// get first grand parent
Parent.prototype.getGrandParentName = function() {
    if (this.constructor.uber) {
        return this.constructor.uber.getGrandParentName();
    }
    return this.name;
}

// get list of names including parent
Parent.prototype.getListOfNames = function() {
    var t = [];
    if (this.constructor.uber) {
        t[t.length] = this.constructor.uber.getListOfNames();
    }
    t[t.length] = this.name;
    // return t.join(', ');
    return t;
}

//// Child1
function Child1() {};
var F = function() {};
F.prototype = Parent.prototype;
Child1.prototype = new F();
Child1.prototype.constructor = Child1;

// Uber for Child1 --> creating connection to parent!!!
Child1.uber = Parent.prototype;

// extending prototype
Child1.prototype.name = 'child1';

//// Child2
function Child2() {};
var F = function() {};
F.prototype = Child1.prototype;
Child2.prototype = new F();
Child2.prototype.constructor = Child2;

// Uber for child2 --> creating connection to parent!!!
Child2.uber = Child1.prototype;

// extending prototype
Child2.prototype.name = 'child2';

var a = new Child2();
// console.log(a.getName());
// console.log(a.getParentName());
// console.log(a.getGrandParentName());
console.log(a.getListOfNames());

// var b = new Child1();
// console.log(b.getName());
// console.log(b.getParentName());



// Page 180 --> next Uber: access to the parent-object --> in progress. It works but I need to understand it