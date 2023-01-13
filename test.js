//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 5 Prototypes

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

//     // Gadget.prototype = {
//     //     price: 100,
//     //     user_rating: 3,
//     //     inform: function() {
//     //         return "User rating: " + this.user_rating + " price: " + this.price;
//     //     }
//     // }
// }

// var a = new Gadget("Henry", "Yellow");
// console.log(a.whoAreYou());
// console.log(typeof Gadget());
/////////////////////

// exercise from mozilla

var myDate = new Date(2012,03,01);
console.log(myDate.getMonth());

myDate.getMonth = function() {
    console.log("Hello");
}

myDate.getMonth();


// Finish prototypes from Mozilla page !!!
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
// next header --> Shadowing properties


// Page 157 --> finish at the begining of the page;