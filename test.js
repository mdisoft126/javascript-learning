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

////// Object.keys(obj)

Object.prototype.customProto = 101;
console.log(Object.getOwnPropertyNames(Object.prototype));
console.log(Object.keys(Object.prototype));

var o = {own: 202};
console.log(o.customProto);
console.log(o.own);
// console.log(Object.getOwnPropertyNames(Object.prototype));
console.log(Object.keys(o));



// Next ES6 addition to objects page 438