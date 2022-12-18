//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////
function sum(a, b) {return a + b};
console.log(sum(2,3));

var sum2 = function(a, b) {return a + b};
console.log(sum2(2,3));

var sum3 = new Function('a', 'b', 'return a + b');
console.log(sum3(2,3));

var sum4 = new Function('a, b', 'return a + b');
console.log(sum4(2,3));

function rargs(a, b, c) {return arguments};
console.log(rargs(2,3,4));
console.log(typeof(rargs()));
console.log(typeof(sum()));
console.log(typeof(sum2()));
console.log(typeof(sum3()));
console.log(typeof(sum4()));


// Page 122 Built-in objects - Function
