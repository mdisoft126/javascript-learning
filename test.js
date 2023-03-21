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
// Iterators

// map()
function myNum() {
    var n = 0;
    return {
        next: function() {
            if (n < 110) {
                n += 10;
                return {value: n, done: false};
            }
        }
    }
}

// create iterator:
var m = myNum();
console.log(m.next()); 

// Next // chaeck this! something is wrong