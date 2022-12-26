//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////
var a = /h/ig;
console.log(typeof a);
// console.log(a.test("Hello world"));
console.log(a.exec("hello"));
console.log(typeof a);
console.log(a.test("Hello world"));
console.log(a.exec("hello"));
console.log(typeof a);

// var b = /h/ig.exec("hello")[0];
// console.log(b);

// var a = "E6t7665D, BluEw, rfed,1 REd, orrrrange, he9j, BLUe, blue,";
// var p = /e/i;
// var s = p.exec(a);

// console.log(p.exec("E6t7665D, BluEw, rfed,1 REd, orrrrange, he9j, BLUe, blue,"));


// Page 143 finish .exec()
