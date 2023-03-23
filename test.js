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

// create an iterable object
var iter = {
    0: "hello ",
    1: "world of ",
    2: "iterators ",
    length: 3,
    [Symbol.iterator] () {
        let index = 0;
        return {
            next: () => {
                let value = this[index];
                let done = index >= this.length;
                index++;
                return{value, done};
            }
        }
    }
}
// for..of loop
for (var n of iter) {
    console.log(n);
}

// Next // Generators, page 190