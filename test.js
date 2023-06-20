//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Function
//// The Function.prototype members
//// apply(this_obj,params_array)

function whatIsIt(a, b) {
    return console.log(this.toString() + a + b);
}

var myObj = {};
var myArr = [];
var a = 5;

whatIsIt.apply(myObj, [2, 3]);
whatIsIt.apply(myArr, [3, 4]);
whatIsIt.apply(a, [4, 5]);
console.log(myObj.toString());

//// call(this_obj, p1, p2, p3..)

var b = 6;
whatIsIt.call(b, 4, 5);

//// length - the number of parameters the function expects

console.log(parseInt.length);
console.log(Function.prototype.apply.length);
console.log(Function.prototype.call.length);

// Next ECMAScript 5 additions to a Function page 450