//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

// extend function

function extend(Child, Parent) {
    var F = function() {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}

// Animal
function Animal() {};
Animal.prototype.name = 'animal';

// get name
Animal.prototype.getName = function() {
    return this.name;
}

//get Parent name
Animal.prototype.getParentName = function() {
    return this.constructor.uber.name;
}

// get first Grandparent name
Animal.prototype.getGrandParentName = function() {
    if(this.constructor.uber) {
        return this.constructor.uber.getGrandParentName();
    }
    return this.name;
}

// get list of names;
Animal.prototype.getListOfNames = function() {
    var t = [];
    if(this.constructor.uber) {
        t[t.length] = this.constructor.uber.getListOfNames();
    }
    t[t.length] = this.name;
    return t;
}

// Mammal
function Mammal() {};
extend(Mammal, Animal);
Mammal.prototype.name = 'mammal';

// Dog
function Dog() {};
extend(Dog, Mammal);
Dog.prototype.name = 'dog';


var a = new Dog();
console.log(a.getName());
console.log(a.getParentName());
console.log(a.getGrandParentName());
console.log(a.getListOfNames());


// Page 182 next --> Copying fields