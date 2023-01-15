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
    this.whoAreYou = function() {
        return "I am " + this.color + ' ' + this.name;
    }
}

Gadget.prototype.price = 100;
Gadget.prototype.user_rating = 3;
Gadget.prototype.inform = function() {
    return "User rating: " + Gadget.prototype.user_rating + " price: " + Gadget.prototype.price;
}



var a = new Gadget("Henry", "Yellow");

// adding new method after creating object a
Gadget.prototype.download = function(what) {
    return this[what];
}

console.log(a.download('color'));

var b = new Gadget("John", "Blue");

console.log(b.name);
console.log(b.user_rating);
console.log(b);
console.log(b.constructor);
console.log(b.constructor.prototype);
console.log(b.constructor.prototype.constructor);


// Page 159 --> next "Nadpisywanie pól prototypu własnymi polami obiektu";