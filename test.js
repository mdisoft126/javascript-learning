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

////// Object.defineProperties(obj,descriptors)

var glass = Object.defineProperties({}, {
    "color": {
        value: "blue",
        writable: true
    },
    "fullness": {
        value: "half",
        writable: false
    }
});

console.log(glass.fullness);
console.log(glass.color);


// Next 