//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Date
//// ECMAScript 5 additions to Date

// Date.now()
console.log(Date.now() === new Date().getTime());
console.log(Date.now());
console.log(new Date().getTime());

// Date.prototype.toISOString()
var d = new Date(2015, 0, 1);
console.log(d.toString());
console.log(d.toUTCString());
console.log(d.toISOString());

// Date.prototype.toJSON()
console.log(d.toJSON() === d.toISOString());
console.log(d.toJSON());

// 


// Next Math page 464

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript