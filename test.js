//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Number
//// The Number.prototype members

// toFixed
var n = new Number(Math.PI);
var n2 = Math.PI;
console.log(n.valueOf());
console.log(n2.valueOf());
console.log(typeof n);
console.log(typeof n2);
console.log(n.toFixed(3));
console.log(n2.toFixed(3));
var m = n.toFixed(3);
var m2 = n2.toFixed(3);
console.log(typeof m);
console.log(typeof m2);

// toExponantial
var n = new Number(56789);
var ex = n.toExponential(2);
console.log(ex);
var originalNumber = parseFloat(ex);
console.log(originalNumber); // it is not original because it is 56800 instead of 56789

// to Precision
var p = new Number(56789);
console.log(p.toPrecision(2));
console.log(p.toPrecision(3));
console.log(p.toPrecision(4));
console.log(p.toPrecision(5));
var piVal = new     Number(Math.PI);
console.log(piVal.toPrecision(4));


// Next String page 454

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript