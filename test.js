//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// RegExp
//// The RegExp.prototype members

// global, ignoreCase, multiline

var re = /[do]o+dle/gmi;

console.log(re);
console.log(re.global);

// last index
console.log(re.lastIndex);
console.log(re.exec("noodle doodle"));
console.log(re);
console.log(re.lastIndex);
var result = re.exec("noodle doodle");
console.log(result);
console.log(re.exec("noodle doodle"));
console.log(re.lastIndex);

// source
console.log(re.source);

// exec
var re2 = /([dn])(o+)dle/g;
var re3 = /[dn]o+dle/g;
console.log(re2.exec("noodle doodle"));
console.log(re3.exec("noodle doodle"));

// test
console.log(re.test("noodle"));
console.log(re.test("test"));


// Next Error objects page 468

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript