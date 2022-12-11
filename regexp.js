// RegEXP tutorial:
// https://www.w3schools.com/js/js_regexp.asp
// https://www.w3schools.com/jsref/jsref_obj_regexp.asp

var a = "E6t7665D, Blu\n\vEwE, rfed,1 RE987d, orr\n\vr88range, he9j, BLUe, blue,";
var p = /e(?!, )/ig;
var s = a.match(p);

console.log(s);


// Status:
// next this one:
// https://www.w3schools.com/jsref/jsref_regexp_onemore.asp