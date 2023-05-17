//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Object
//// ECMAScript 6 additions to objects

////// Computed property names

var obj = {
    foo: "bar",
    ["baz" + q()]:42
}

function q() {
    return "hello";
}

console.log(obj);



// Next Object.assign 439