//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////
var a = Number('12.12');
console.log(a);
console.log(typeof a);

var b = new Number('12.12');
console.log(b);
console.log(typeof b);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

var a = new Number(123.736);
console.log(a.toFixed(2));

console.log((34.653).toFixed(1));

console.log((1736.768).toExponential());

console.log((753.246).toPrecision(2));

var n = new Number(255);
console.log(n.toString());
console.log(n.toString(10));
console.log(n.toString(16));
console.log(n.toString(2));
console.log(n.toString(8));

console.log((6).toString(2));

// Page 127 Boolean
