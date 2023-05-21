//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Array
//// ES6 addition to arrays
//// Array.prototype.findIndex(predicate, thisArg?)

function cond(x) {
    return x < 0;
}

// console.log(cond(-2));

var a = [1,-2,3];

console.log(a.findIndex(cond));

// arrow function
console.log(a.findIndex(y => y < 0));

// Next Array.prototype.findIndex(predicate, thisArg?) 448