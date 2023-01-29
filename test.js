//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

// Copying fields

function extend(Child, Parent) {
    var F = function() {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}

function extend2(Child, Parent) {
    var c = Child.prototype;
    var p = Parent.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    Child.uber = Parent.prototype;
}

function Animal() {};
Animal.prototype.name = 'animal';
Animal.prototype.getParentName = function() {
    return this.constructor.uber.name;
}
Animal.prototype.getGrandParentName = function() {
    if(this.constructor.uber) {
        return this.constructor.uber.getGrandParentName();
    }
    return this.name;
}
Animal.prototype.getListOfNames = function() {
    var t = [];
    if(this.constructor.uber) {
        t[t.length] = this.constructor.uber.getListOfNames();
    }
    t[t.length] = this.name;
    return t.join(', ');
}

function Mammal() {};
// extend(Mammal, Animal);
extend2(Mammal, Animal);
// Mammal.prototype.name = 'mammal';

function Dog() {};
// extend(Dog, Mammal);
extend2(Dog, Mammal);
// Dog.prototype.name = 'dog';

var a = new Dog();
console.log(a.name);
console.log(a.getParentName());
console.log(a.getGrandParentName());
console.log(a.getListOfNames());

console.log('\n');

console.log(a.name); // extend: animal, extend2: animal
console.log(a.constructor.prototype.hasOwnProperty('name'));            // extend: false, extend2: true
console.log(a.constructor.prototype.hasOwnProperty('getParentName'));   // extend: false, extend2: true
console.log(a.__proto__.hasOwnProperty('name'));                        // extend: false, extend2: true
console.log(a.__proto__.hasOwnProperty('getParentName'));               // extend: false, extend2: true


// Page 184 next --> Beware of copying by reference!