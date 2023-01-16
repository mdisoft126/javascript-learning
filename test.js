//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 5 Prototypes

function Gadget(name, color) {
    this.name = name;
    this.color = color;
    this.method = function() {
        return "Hello " + this.color + " " + this.name;
    }
}
Gadget.prototype.price = 100;
Gadget.prototype.user_rating = 4;

var a = new Gadget("John", "yellow");
console.log(a);

for (var field in a) {
    console.log(field + " = " + a[field]);
}

console.log(a.hasOwnProperty('name'));
console.log(a.hasOwnProperty('price') + '\n');

// only for own ones

for (var own in a) {
    if (a.hasOwnProperty(own)) {
        console.log(own + " = " + a[own]);
    }
}

console.log('\n');

// is enumerable

console.log(a.propertyIsEnumerable('name'));
console.log(a.propertyIsEnumerable('method'));
console.log(a.propertyIsEnumerable('price'));
console.log(a.propertyIsEnumerable('constructor'));

console.log('\n');

console.log(a.constructor.prototype.propertyIsEnumerable('price'));



// Page 162 --> next "isPrototypeOf()";