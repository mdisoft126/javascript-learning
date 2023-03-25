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

// Set
// Converting maps to arrays
var s = new Set();
s.add("one");
console.log(s);
console.log(s.has("one"));
s.add("two");
console.log(s);
s.add("one")
console.log(s);
s.delete("one");
console.log(s);

var c = new Set([
    'red', "blue", "yellow", "red", "green", "orange", "blue"
]);
console.log(c);


// Next Chaper 8 - Classes and modules page 262