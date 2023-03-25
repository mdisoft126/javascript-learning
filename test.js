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
// Iterating over maps

// iterable over keys
var m1 = new Map([
    [1, "hello"],
    [2, "how are"],
    [3, "you?"]
]);

for (var i of m1.keys()) {
    console.log(i);
};

// iterable over values
for (var j of m1.values()) {
    console.log(j);
};

// iterable by returning entries
for (var k of m1.entries()) {
    // console.log(k);
    console.log(k[0], k[1]);
}

// use destructuring to make it concise
for (var [l, m] of m1.entries()) {
    console.log(l, m);
}

// and event more succinct
for (var [n, o] of m1) {
    console.log(n, o);
}



// Next Chaper 8 - Classes and modules page 262