//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Object
//// ECMAScript 5 additions to objects

// ES5 descriptor (defining a nonmalleable property)
var person = {};
Object.defineProperty(person, 'heads', {value: 1});
console.log(person.heads);
console.log(person.heads = 2);
console.log(person.heads);
console.log(delete person.heads);
console.log(person.heads);


// Next - ECMAScript 5 additions to objects page 433