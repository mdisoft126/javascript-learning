//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 5 Prototypes

//// check if the the field or method which you want to add to the build-in method, doesn't already exists.

function Dog() {
    this.tail = true;
}

var pimpek = new Dog;
var max = new Dog;

console.log(pimpek.tail);
console.log(max.tail);

console.log(pimpek.constructor);
console.log(pimpek.constructor.prototype.constructor);

console.log(typeof pimpek.tail);
console.log(typeof pimpek.constructor.prototype.tail);

Dog.prototype.bark = function() {
    return 'Hau hau!';
}

console.log(pimpek.bark());

Dog.prototype.legs = 4;

console.log(pimpek.legs);

Dog.prototype = {big: true, color: 'white'};
// Dog.prototype.constructor = Dog; // see what this line change --> needed to working correctly!!!!!!!!!!


console.log(pimpek.color); // undefined --> didn't overwrited the old one
console.log(pimpek.bark());

var donkey = new Dog;

console.log(donkey.color);
// console.log(donkey.bark()); // didn't work as the new onject use the new prototype

console.log(donkey.constructor);
console.log(pimpek.constructor);

console.log(typeof pimpek.constructor.prototype.color);
console.log(typeof donkey.constructor.prototype.color);


// Page 169 --> next summary;