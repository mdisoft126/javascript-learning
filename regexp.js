// RegEXP tutorial:
// https://www.w3schools.com/js/js_regexp.asp
// https://www.w3schools.com/jsref/jsref_obj_regexp.asp

var a = "E6t7665D, BluEw, rfed,1 REd, orrrrange, he9j, BLUe, blue,";
var p = /[^a-z]/g;
var s = a.match(p);

console.log(s);


// Status:
// next this one:
// https://www.w3schools.com/jsref/jsref_regexp_dot.asp