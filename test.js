//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Date
//// The Date.prototype members

// toUTCString()
var a = new Date(2015, 0, 1);
console.log(a.toString());
console.log(a.toUTCString());

// toDateSting()
console.log(a.toDateString());

// toTimeString()
console.log(a.toTimeString());

// toLocale...
console.log(a.toLocaleString());
console.log(a.toDateString());
console.log(a.toTimeString());

// getTime() setTime(time)
console.log(a.toLocaleString());
console.log(a.getTime());
console.log(a.setTime(a.getTime() + 1000 * 60 * 60 * 24));
console.log(a.toLocaleString());
console.log(a.getTime());

// 

// Next The Date.prototype members page 462

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript