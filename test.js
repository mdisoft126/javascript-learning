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
// Generators

// create function logger
function* logger() {
    console.log("start");
    console.log(yield 1);
    console.log(yield);
    console.log(yield);
    return("end");
}

// call the functioin
var log = logger();
console.log(log.next());
console.log(log.next("save"));
console.log(log.next("our"));
console.log(log.next("souls"));


// Next // Iterating over generators 194