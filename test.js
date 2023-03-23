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
// Iterables

// create an object
var myNum = {};

// make it iterable:
myNum[Symbol.iterator] = function() {
    let n = 0;
    done = false;
    return {
        next() {
            n += 10;
            if (n == 100) {done = true};
            return {value: n, done: done};
        }
    }
}

// use for..of loop

for (var num of myNum) {
    console.log(num);
}


// Next // Iterables, page 189