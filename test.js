//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix D: Regular Expressions
//////
////

console.log("some text".match(/me/));

// [abc]
console.log("some text".match(/[otx]/g));

// [a-z]
console.log("Some Text".match(/[a-z]/g));
console.log("Some Text".match(/[a-zA-Z]/g));

// [^abc]
console.log("Some Text".match(/[^a-z]/g));
console.log("SomeText".match(/[^a-z]/g));

// a|b
console.log("Some Text".match(/Some|T|t|p/g));



// Next Appendix D: Regular Expressions - // a(?=b) page 473

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript