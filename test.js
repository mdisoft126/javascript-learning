//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Array
//// 

var a = new Array(1, 2, 3);
var b = [1, 2, 3]; // recommended

var un = new Array(3);
console.log(un);
console.log(un.length);

console.log("0" in un);
console.log("0" in a);

console.log(un[0]);

var c = [3.14];
console.log(c);

// var d = new Array(3.14); // error
// console.log(d);

// Next The Array.prototype members 440