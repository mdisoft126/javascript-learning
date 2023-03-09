//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// Chapter 5 from new book and then continue from 8
//// ES6 Iterators and Generators

const iter = ['a', 'b'];

// new loop for..of
for (const i of iter) {
    console.log(i);
}

// // old loop for..in
// for (var i in iter) {
//     console.log(iter[i]);
// }

// new loop for..of for Strings
for (let s of "String") {
    console.log(s);
}

//

// Page