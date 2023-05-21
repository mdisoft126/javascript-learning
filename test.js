//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Array
//// ES6 addition to arrays
//// Array.prototype.entries() Array.prototype.keys() Array.prototype.values()

let a = Array.of(1,2,3,"foo");

let k,v,e;

console.log("// keys:");
for (k of a.keys()) {
    console.log(k);
}

console.log("// values:");
for (v of a.values()) {
    console.log(v);
}

console.log("// entries:");
for (e of a.entries()) {
    console.log(e);
}

// Next Array.prototype.find(predicate, thisArg?) 448