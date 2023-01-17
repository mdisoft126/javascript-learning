//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// Example out of the book - use of apply

function sum() {
    console.log(this);
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

var a = sum.apply({name: 'John', color: 'yellow'}, [3, 4, 5]);
console.log(a);


// 5 Prototypes

// Array.prototype.inArray = function(needle) {
//     for (var i = 0; i < this.length; i++) {
//         if (this[i] === needle) {
//             return true;
//         }
//     }
//     return false;
// }

// var t = ["reb", "black", "white"];

// console.log(t.inArray("yellow"));
// console.log(t.inArray("black"));

//////
// var s = 'hello';
// var appl = apply(s);
// console.log(appl);


// Page 165 --> next Rozszerzanie obiektów wbudowanych;