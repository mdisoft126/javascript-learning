//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// String
//// The String.prototype members

// length

// charAt
var a = "script";
console.log(a.charAt(0));
console.log(a[0]);

// charCodeAt
console.log(a.charCodeAt(0));

// concat
console.log(a.concat(" ", "hello", " ło"));

// indexOf
console.log("javascript".indexOf("scr"));
console.log("javascript".indexOf("scr", 5));
console.log("javascript".indexOf("a"));

// lastIndexOf
console.log("javascript".lastIndexOf("a"));

// localeCompare
console.log("cicle".localeCompare("script"));
console.log("wave".localeCompare("script"));
console.log("script".localeCompare("script"));

// match(regexp)
console.log("R2R-D2 and C-3PO".match(/[0-9](R)/g));

// 

// Next replace(needle,replacement) page 457

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript