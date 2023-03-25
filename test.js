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

// create function logger - checking
function* logger() {
    yield 'a'
    yield 'b'
    return 'end'
}

//// checking if generator functions conforms to the iterables contract
var log = logger();
// the generator object is build using generator function
console.log(typeof log[Symbol.iterator] === "function");
// it is an iterable
console.log(typeof log.next === "function");
// and an iterator (has a next() method)
console.log(log[Symbol.iterator]() === log);



// Next // Iterating over generators 194