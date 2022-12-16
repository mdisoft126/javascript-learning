//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

function Animal(species, name) {this.species = species; this.name = name}
var a = new Animal("dog", "Rex");
console.log(a instanceof Animal);
console.log(a instanceof Object);

var o = {};
console.log(o instanceof Animal);
console.log(o instanceof Object);

// Page 110
