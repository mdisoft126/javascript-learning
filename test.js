//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix E: Answers to Exercise Questions
////// Chapter 3, Functions
//// 4

// example 1
var x = 5, y = 7;
eval('x + y');
console.log(eval('x + y'));
var f = console.log;
eval('f("Boo!")');

// example 2
var f2 = console.log;
var e2;
eval('e2=f2')('Boo!');

// example 3
(function() {
    return console.log;
})()("Boo!");

// or
(function(x) {
    return console.log(x);
})("Boo!");


// Next Appendix E: Answers to Exercise Questions //

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip