//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix E: Answers to Exercise Questions
////// Chapter 6, Inheritance
//// 1 -  multiple inheritance with prototypal inheritance pattern

// version 2 (from book)
function objectMulti() {
    var Constr, i, prop, mixme;

    // Constructor that sets own properties
    var Constr = function(props) {
        for (var prop in props) {
            this[prop] = props[prop];
        }
    }

    // Mix into the proptotype
    for (var i = 0; i < arguments.length - 1; i++) {
        var mixme =  arguments[i];
        for (var prop in mixme) {
            Constr.prototype[prop] = mixme[prop];
        }
    }

    return new Constr(arguments[arguments.length - 1]);
}

var obj1 = {a: 1};
var obj2 = {a: 2, b: 2};
var obj3 = {c: 3};
var my = objectMulti(obj1, obj2, obj3, {hello: "world"});
var my2 = objectMulti(obj1, obj2, obj3);

console.log(my.a);
console.log(my.hello);

console.log(my.hasOwnProperty('a'));
console.log(my.hasOwnProperty('c'));
console.log(my.hasOwnProperty('hello'));

console.log(my2.hasOwnProperty('a'));
console.log(my2.hasOwnProperty('c'));



// page 495



// Next

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip