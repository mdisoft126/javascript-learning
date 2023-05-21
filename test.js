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
//// Array.from(arrayLike, mapFunc?, thisArg?)

var arr_like = {length: 4, 0: "a", 1: "b", 2: "c"}
console.log(arr_like);

var a = Array.from(arr_like);
console.log(a);

////

for (const x of a) {
    console.log(x);
}


// Next ES6 addition to arrays 447