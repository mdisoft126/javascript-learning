//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

var oryginal = {a: 1};
var copy = oryginal;
console.log(copy.a);
copy.a = 100;
console.log(copy.a);
console.log(oryginal.a);

var oryginal = {a: 1};
var reset = function(o) {(o.a = 0)};
reset(oryginal);
console.log(oryginal.a);

var oryginal = {a: 1};
var multi = function(o) {(o.a = 2*oryginal.a)};
multi(oryginal);
console.log(oryginal.a);


// Page 110
