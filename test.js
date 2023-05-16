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

////// Object.preventExtensions(obj)
////// Object.isExtensible(obj)

var deadline = {};
console.log(Object.isExtensible(deadline));
deadline.date = "yesterday";
console.log(deadline.date);
Object.preventExtensions(deadline);
console.log(Object.isExtensible(deadline));
deadline.date = "today";
console.log(deadline.date);

// but adding new property doeasn't work
deadline.report = true;
console.log(deadline.report);
console.log(Object.getOwnPropertyDescriptors(deadline));

Object.defineProperty(deadline, "date", {
    enumerable: false
});

console.log(Object.getOwnPropertyDescriptors(deadline));

// Next Object.seal(obj) and Object.isSealed(obj) page 437