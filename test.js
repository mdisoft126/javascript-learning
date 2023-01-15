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
    inform: function() {
        return "User rating: " + this.user_rating + " price: " + this.price;
    }
}


var a = new Gadget("Henry", "Yellow");
console.log(a.whoAreYou());
console.log(a.price);
console.log(a.inform());
console.log(typeof a);


// Page 157 --> finish at the begining of the page;