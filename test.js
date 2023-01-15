//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 5 Prototypes

//// 1st way
// function Gadget(name, color) {
//     this.name = name;
//     this.color = color;
//     this.whoAreYou = function() {
//         return "I am " + this.color + ' ' + this.name;
//     }
//     Gadget.prototype.price = 100;
//     Gadget.prototype.user_rating = 3;
//     Gadget.prototype.inform = function() {
//         return "User rating: " + this.user_rating + ", price: " + this.price;
//     }
// }

//// 2nd way
function Gadget(name, color) {
    this.name = name;
    this.color = color;
    this.whoAreYou = function() {
        return "I am " + this.color + ' ' + this.name;
    }
}

Gadget.prototype = {
    price: 100,
    user_rating: 3,

    //// 1st way
    inform: function() {
        return "User rating: " + this.user_rating + " price: " + this.price;
    }
    
    ////// 2nd way
    // inform: function() {
    //     return "User rating: " + Gadget.prototype.user_rating + " price: " + Gadget.prototype.price;
    //}
}


var a = new Gadget("Henry", "Yellow");
console.log(a.whoAreYou());
console.log(a.price);
console.log(a.inform());

// list of prototypes
console.log(Object.getPrototypeOf(a));

// adding new method after creating object a
Gadget.prototype.download = function(what) {
    return this[what];
}

console.log(a.download('color'));


// Page 158 --> next "Własne pola obiektu a pola prototypu";