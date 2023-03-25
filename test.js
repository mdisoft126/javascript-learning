//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 5 from new book and then continue from 8

////// ES6 Iterators and Generators
//// Iterators and iterables
// Collections

// Map
// Converting maps to arrays
var m = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"]
]);

const arr = [...m.keys()];
console.log(arr);

const arr2 = [...m];
console.log(arr2);
console.log(arr2[1]);




// Next Chaper 8 - Classes and modules page 262