//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Array
//// Array.prototype.reduceRight(callback, start)

function concat(result_so_far, el) {
    return result_so_far + el;
}

var a = ["hehe", "aaa", "bbb"];

console.log(a.reduceRight(concat));


// Next ES6 addition to arrays 447