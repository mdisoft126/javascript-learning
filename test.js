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

// ES5 data descriptor
var person = {};
Object.defineProperty(person, "legs", {
    value: 2,
    writable: true,
    configurable: true,
    enumerable: true
});

console.log(person.legs);
person.legs = 3;
console.log(person.legs);

// ES5 accessor descriptor
var person2 = {};
Object.defineProperty(person2, "legs2", {
    set: function(v) {this.value = v;},
    get: function() {return this.value;},
    configurable: true,
    enumerable: true
});

console.log(person2.legs2);
person2.legs2 = 5;
console.log(person2.legs2);
person2.legs2 = 6;
console.log(person2.legs2);


// Next - ECMAScript 5 additions to objects page 433