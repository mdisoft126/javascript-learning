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

// create function
function* generate() {
    yield 1;
    yield 2;
    return 3;
}

// call function
var generator = generate();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// Next // Iterating over generators190