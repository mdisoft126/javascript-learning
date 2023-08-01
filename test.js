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

// getYear()
var d = new Date(2015,0,1);
console.log(d);
console.log(d.getYear());
console.log(d.getFullYear());
console.log(d.getUTCFullYear());
console.log(d.setFullYear(2020));
console.log(d);
console.log(d.setUTCFullYear(2022));
console.log(d);

// getMonth()
var d = new Date(2015,0,1);
console.log(d);
console.log(d.getMonth());
console.log(d.getUTCMonth());
console.log(d.setMonth(4));
console.log(d);
console.log(d.setUTCMonth(2));
console.log(d);
console.log(d.toLocaleDateString());
console.log("testing");
var d = new Date(Date.UTC(2020, 0, 1));
console.log(d);
console.log(d.setUTCMonth(4));
console.log(d);
console.log(d.toLocaleDateString());
console.log(d.toDateString());

// getDate()
console.log(d.getDate());
console.log(d.getUTCDate());
console.log(d.setDate(15));
console.log(d);
console.log(d.setUTCDate(20));
console.log(d);

// getHours, minutes...
console.log(d.getHours());
console.log(d.getUTCHours());
console.log(d.setHours(8));
console.log(d.getHours());
console.log(d.getUTCHours());
console.log(d.setUTCHours(10));
console.log(d.getHours());
console.log(d.getUTCHours());
console.log(d.getMinutes());
console.log(d.setMinutes(5));
console.log(d);
console.log(d.setUTCMinutes(10));
console.log(d);
console.log(d.setSeconds(20));
console.log(d);
console.log(d.setMilliseconds(999));
console.log(d);
console.log(d.setMilliseconds(1005));
console.log(d);

// getTimezoneOffset()
console.log(new Date().getTimezoneOffset());

// getDay()
console.log(d.toDateString());
console.log(d.toLocaleDateString());
console.log(d.getDay());
console.log(d.getUTCDay());

var d = new Date(Date.UTC(2020, 0, 1));
console.log(d);
console.log(d.toDateString());
console.log(d.toLocaleDateString());
console.log(d.getDay());
console.log(d.getUTCDay());
console.log(d.setUTCHours(8));
console.log(d);
console.log(d.getUTCDay());

// 


// Next ECMAScript 5 additions to Date page 464

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript