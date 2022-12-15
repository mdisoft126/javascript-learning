//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line
// shift + ctrl + k --> remove line

////
var key = 'name';

var dog = {
  name: 'Rex',
  say: function() {
    return "Hau hau";
  },
  author: {
    name: 'Max',
    surname: 'Last'
  }
}

console.log(dog.name);
console.log(dog['name']);
console.log(dog.say());
console.log(dog['say']());
console.log(dog['author'].name);
console.log(dog[key]);

// Page 106 --> Dostęp do własności obiektu
