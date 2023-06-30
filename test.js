//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// String
//// ECMAScript 6 additions to String

// Template Literals
var a = 3;
var b = 5;
console.log(`My number is ${a + b}.`);

// String.prototype.repeat
console.log("foo".repeat(3));
var x = 5;
console.log("a".repeat(2 * x));

// String.prototype.startsWith
console.log("hello".startsWith("ello", 0));
console.log("hello".startsWith("ello", 1));
console.log("hello".startsWith("ello", 2));

// String.prototype.endsWith
console.log("hello".endsWith("he",2));
console.log("hello".endsWith("lo",5));
console.log("hello".endsWith("ell",4));

// String.prototype.includes
console.log("hello".includes("l"));
console.log("hello".includes("l", 0));
console.log("hello".includes("l", 3));
console.log("hello".includes("l", 4));

// 

// Next Date page 459

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript