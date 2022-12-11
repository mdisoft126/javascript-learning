// RegEXP tutorial:
// https://www.w3schools.com/js/js_regexp.asp
// https://www.w3schools.com/jsref/jsref_obj_regexp.asp

var a = "E6t7665D, Blu\n\vEw, rfed,1 REd, orr\n\vrrange, he9j, BLUe, blue,";
var p = /[^a-z]/g;
var s = a.match(p);

console.log(a);


// Status:
// next this one:
// https://www.w3schools.com/jsref/jsref_regexp_onemore.asp