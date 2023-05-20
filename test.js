//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Array
//// Array.prototype.every(callback, this_obj)

function hasEye(el) {
    return el.indexOf('a') !== -1;
}

var a = ["itsya", "bitsya", "spidera"];

console.log(a.every(hasEye));

/////
a.every(function (e) {
    console.log(e);
    return false;
});


// Next ES6 addition to arrays 447