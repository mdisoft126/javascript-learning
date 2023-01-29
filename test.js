//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

// Beware of copying by reference!

function extend(Child, Parent) {
    var c = Child.prototype;
    var p = Parent.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    Child.uber = p;
}

function Animal() {};
Animal.prototype.name = 'animal';
Animal.prototype.table = [1,2,3];
function Mammal() {};
extend(Mammal, Animal);

console.log(Animal.prototype.name);
console.log(Animal.prototype.table);
console.log(Mammal.prototype.name);
console.log(Mammal.prototype.table);
console.log('\n');

// Simple type is not touched. Parent's name value is not touched
Mammal.prototype.name = 'mammal';
console.log(Animal.prototype.name);
console.log(Mammal.prototype.name);
console.log('\n');

// // Assignement to the new object is fine. Parent object will stay not touched.
// Mammal.prototype.table = [3,4,5];
// console.log(Animal.prototype.table);
// console.log(Mammal.prototype.table);
// console.log('\n');

// Doing something on currecnt object like table will result that on the aparent object will be visible a new value as well.
Mammal.prototype.table.push(3,4,5);
console.log(Animal.prototype.table);
console.log(Mammal.prototype.table);
console.log('\n');


// Page 186 next --> Objects inherit from objects