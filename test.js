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

// replace(needle,replacement)
console.log("R2-D2".replace(/2/g, "-two"));
console.log("R22-D2".replace(/(2)/g, "$1$1"));
console.log("R22-D2".replace(/(2)/g, "$1$1"));

// regex example
var myRegex = /(\w+)\s(\w+)/;
var myString = "Hello World";
var matches = myString.match(myRegex);
console.log(matches);

console.log(myString.replace(myRegex, "$1 $2"));
console.log(myString.replace(myRegex, "$2 $1"));
console.log(myString.replace(myRegex, "$2$1"));
console.log(myString.replace(myRegex, "$2, $1"));

// search(regexp)
console.log("P-123".search(/[0-9]/));

// slice(start, end)
console.log("hello, how is life".slice(4, 13));
console.log("hello, how is life".slice(4, -1));
console.log("hello, how is life".slice(-7, -1));
console.log("hello, how is life".slice(-4));

// split(separator, limit)
console.log("1,2,3,4".split(/,/));
console.log("1,2,3,4".split(",", 2));
console.log("1,2,3,4".split(/[0-9]/));

// substring(start, end)
console.log("hello, how is life".substring(4, 13));
console.log("hello, how is life".substring(13, 4));
console.log("hello, how is life".substring(-3, 13));
console.log("hello, how is life".substring(3, -6));
console.log("hello, how is life".substring(5));
console.log("hello, how is life".substring(5, -7));
console.log("hello, how is life".substring(5, 30));

// 

// Next ECMAScript 5 additions to String page 458

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript