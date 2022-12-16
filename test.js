//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

function Animal(species, name) {this.species = species; this.name = name}
var a = new Animal("dog", "Rex");
var b = new Animal("cat", "Kitty");
var c = new b.constructor("hamster", "Puszka");
console.log(c);

var o = {};
console.log(o.constructor);
console.log(typeof(o.constructor));

// Page 110
