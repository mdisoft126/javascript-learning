//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Array
//// ES6 addition to arrays
//// Array.prototype.fill(value : any, start=0, end=this.length) : This

var a = ["a","b","c"];
console.log(a);

// copy array
function copyArr(el) {
    return el;
}

var b = a.map(copyArr);

console.log(b);


a.fill(1);
console.log(a);

b.fill(7, 1, 2);
console.log(b);

// Next Function 449