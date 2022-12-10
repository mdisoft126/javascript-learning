// RegEXP tutorial:
// https://www.w3schools.com/js/js_regexp.asp
// https://www.w3schools.com/jsref/jsref_obj_regexp.asp

var a = "E6t7665D, BluEw, rfed,1 REd, orrrrange, he9j, BLUe, blue,";
var p = /e/i;
var s = p.exec(a);

// console.log(p.global);

console.log("Found letter: " + s[0] + " in position: " + s.index + " from input: " + s.input);

// Status:
// next this one:
// https://www.w3schools.com/jsref/jsref_regexp_m.asp