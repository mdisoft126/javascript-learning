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

// Iterating over generators

// turn iterables into array
function* logger() {
    yield 'a'
    yield 'b'
}

var arr = [...logger()];
console.log(arr);


// Next // Collections 195