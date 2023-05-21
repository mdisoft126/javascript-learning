//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Array
//// Array.prototype.map(callback, this_obj)

function cap(el) {
    return el.toUpperCase();
}

var array = ["ency", "pency", "dudu"];

console.log(array.map(cap));


// Next Array.prototype.reduce(callback, start) 446