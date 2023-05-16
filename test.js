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

////// Object.seal(obj) and Object.isSealed(obj)

var deadline = {};
console.log(Object.isSealed(deadline));
deadline.date = "yesterday";
console.log(deadline.date);
Object.seal(deadline);
console.log(Object.isSealed(deadline));
deadline.date = "today";
console.log(deadline.date);

// adding new properties doesn't work
deadline.report = true;
console.log(deadline.report);

// and changing values of description also doesn't work (so redefine property date doen't work. there is an error)
console.log(Object.getOwnPropertyDescriptors(deadline));

Object.defineProperty(deadline, "date", {
    enumerable: false
});

console.log(Object.getOwnPropertyDescriptors(deadline));


// Next