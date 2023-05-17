//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Object
//// ECMAScript 6 additions to objects

////// Object.assign

// console.log(Object.getOwnPropertyNames(Object.prototype));

var dest = {quux: 0};
var src1 = {foo: 1, bar: 2};
var src2 = {foo: 3, baz: 4};

console.log(Object.getOwnPropertyNames(dest));

Object.assign(dest, src1, src2);

console.log(Object.getOwnPropertyNames(dest));

console.log(dest.foo);



// Next Array 439