//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Function
//// ECMAScript 6 additions to a Function
//// arrow functions

// example
const materials = ['hydrogen', 'helium', 'glass'];
console.log(materials.map(material => material.length));

// An empty arrow function returns undefined
const empty = () => {};
console.log(empty);

// Immediately invoked function expression
(() => console.log("hello"))();

// example 2
const simple = (a) => (a > 15 ? 15 : a);
console.log(simple(17));
console.log(simple(10));

// easy array filtering, mapping and ect
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce(console.log((a, b) => a + b)); ////// check this and repair

// next continue above
// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions?retiredLocale=pl


// Next ECMAScript 6 additions to a Function page 451


// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript