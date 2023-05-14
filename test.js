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

////// Object.getOwnPropertyDescriptor(obj, property)

var person = {};
Object.defineProperty(person, "legs", {
    value: 2,
    writable: true,
    configurable: true,
    enumerable: true
});

console.log(person.legs);

// use Object.getOwnPropertyDescriptor on created person object
console.log(Object.getOwnPropertyDescriptor(person, "legs"));

// use Object.getOwnPropertyDescriptor on build in object
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));


// Next 