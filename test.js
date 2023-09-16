//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix E: Answers to Exercise Questions
////// Chapter 4, Objects
//// 7

// MyMath()

function isArray(ar) {
    return Object.prototype.toString.call(ar) === '[object Array]';
}

function max() {
    var numbers = arguments;
    console.log(numbers);
    console.log(numbers[0]);
}

// console.log(isArray([1,2,3]));
// console.log(isArray(1,2,3));

var a = max(1,2,3);
var b = max([1,2,3]);


// Next Appendix E: Answers to Exercise Questions

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip