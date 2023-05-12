//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects

// not recommended but Object can guess the type
var o = new Object("hello");
console.log(o.constructor);

var o = new Object(123);
console.log(o.constructor);

//// Members of the Object constructor
// Object.prototype
var s = new String("noodles");
Object.prototype.custome = 1;
console.log(s.custome);

//// The Object.prototype members
// constructor
console.log(Object.prototype.constructor === Object);
var o = new Object();
console.log(o.constructor === Object);

// toString
var o = {prop: 1};
console.log(o.toString());
var o = new Number(255);
console.log(o.toString());
console.log(o.toString(16));

// toLocaleString
console.log(o.toLocaleString());
console.log(o.toLocaleString(16));

const num = 123456.78;
const date = new Date();

console.log(num.toLocaleString());       // "123,456.78" (US locale)
console.log(num.toString());       // 
console.log(date.toLocaleString());      // "5/13/2023, 3:45:10 PM" (US locale)
console.log(date.toString());      // 
console.log(date.toLocaleString('fr'));  // "13/05/2023 à 15:45:10" (French locale)
console.log(date.toString('fr'));  // 

// valueOf
var o = {};
console.log(typeof o.valueOf());
console.log(o.valueOf() === o);
var n = new Number(123);
console.log(typeof n.valueOf());
console.log(n.valueOf() === n);
var d = new Date();
console.log(typeof d.valueOf());
console.log(d.valueOf() === d);
console.log(d.valueOf());

// hasOwnProperty
var o = {prop: 1};
console.log(o.hasOwnProperty('prop'));
console.log(o.hasOwnProperty('toString'));
console.log(o.hasOwnProperty('fromString'));

// isPrototypeOf
var s = new String("");
console.log(Object.prototype.isPrototypeOf(s));
console.log(String.prototype.isPrototypeOf(s));
console.log(Array.prototype.isPrototypeOf(s));

// propertyIsEnumerable
var a = [1,2,3];
console.log('length: ' + a.propertyIsEnumerable('length'));
console.log('0: ' + a.propertyIsEnumerable(0));

var b = 'hello';
console.log('length b: ' + b.propertyIsEnumerable('length'));
console.log('0 b: ' + b.propertyIsEnumerable(0));



// Next - ECMAScript 5 additions to objects page 433