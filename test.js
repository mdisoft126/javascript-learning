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

////// Object.create(obj, descr)

var parent = {hi: "hello"};
var o = Object.create(parent, {prop: {value: 1}});
console.log(o.hi);
console.log(o.prop);


// Next - Object.getOwnPropertyDescriptor(obj, property) page 436