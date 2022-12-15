//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line
// shift + ctrl + k --> remove line

////

var animal = {};

animal.species = 'dog';
animal.name = 'max';
animal.sayName = function() {return this.name};


console.log(animal);
console.log(animal.species);
console.log(animal.name);
console.log(animal.sayName());

// Page 106 --> Dostęp do własności obiektu
