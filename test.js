//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line
// shift + ctrl + k --> remove line

////

// function Work() {
//   this.specialization = 'Analyst';
// }

// var work = new Work();
// console.log(work.specialization);

// function Animal(species, name) {
//   this.species = species;
//   this.name = name;
//   this.whatAnimal = function() {
//     return "My species is " + species + " and my name is " + name;
//   }
// }

// var dog = new Animal("dog", "max");
// var cat = new Animal("cat", "kitty");

// console.log(dog.whatAnimal());
// console.log(cat.whatAnimal());

function Work(name, position) {
  this.name = name;
  this.position = position;
  this.whatNameAndPosition = function() {
    return "My name is " + name + " and my position is " + position;
  }
}

var marcin = new Work("Marcin", "analyst");
var justyn = new Work("Justyn", "journalist");

console.log(marcin.whatNameAndPosition());
console.log(justyn.whatNameAndPosition());

// Page 110
