//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Object
//// ECMAScript 5 additions to objects

////// Object.getOwnPropertyNames(obj)

console.log(Object.getOwnPropertyNames(Object.prototype));
console.log(Object.keys(Object.prototype)); // Object.prototype has no enumerables properties so the array is empty

// create object with enumerables properties
var obj = {
    foo: 1,
    bar: 2
}

console.log(Object.keys(obj));


// Next 