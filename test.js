//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// JSON
//// Members of the JSON object

// stringify(value, callback, white)

var o = {
    hello: 1,
    hi: 2,
    when: new Date(2015, 0, 1)
};

console.log(JSON.stringify(o));

console.log(JSON.stringify(o, ['hello', 'hi']));
console.log(JSON.stringify(o, ['when']));

console.log(JSON.stringify(o, null, 0));
console.log(JSON.stringify(o, null, 1));
console.log(JSON.stringify(o, null, 2));
console.log(JSON.stringify(o, null, 3));
console.log(JSON.stringify(o, null, 4));
console.log(JSON.stringify(o, null, 10));

// Next Appendix D: Regular Expressions page 472

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript