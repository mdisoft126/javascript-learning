//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 5 Prototypes
function Gadget(name) {
    this.name = name;
    Gadget.prototype.name = 'hello';
}

var a = new Gadget("John");

console.log(a.name);
console.log(a.constructor.prototype.name);
console.log(delete a.name);
console.log(a.name);
console.log(a.name = 'Henry');


// Page 159 --> next "Nadpisywanie pól prototypu własnymi polami obiektu";