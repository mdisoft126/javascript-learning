//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Array
//// Array.prototype.some(callback, this_obj)

function hasEye(el) {
    return el.indexOf('a') !== -1;
}

var a = ["itsy", "bitsy", "spidera"];

console.log(a.some(hasEye));

/////
a.some(function (e) {
    console.log(e);
    return false;
});


// Next Array.prototype.filter(callback,this_obj) 446