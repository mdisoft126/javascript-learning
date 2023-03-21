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

// Take and array and return an iterator
function iter(array) {
    var n = 0;
    return {
        next: function() {
            if (n < array.length) {
                return {value: array[n++], done: false};
            } else {
                return {done: true};
            }
        }
    }
}

// create iterator:

var m = iter(["hello", "bye bye"]);
console.log(m.next().value);
console.log(m.next().value);
console.log(m.next().done);
console.log(m.next().value);

// Next // 