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

// exercise from mozilla

var myObj = {
    city: "Konin",
    greet() {
        // console.log("Greetings from " + this.city);
        console.log(`Greetings from ${this.city}.`);
    }
}

myObj.greet();
console.log(myObj.toString());
console.log(Object.getPrototypeOf(myObj));
console.log(Object.prototype);

const myDate = new Date();
var object = myDate;

// console.log(Object.getPrototypeOf(object));
// var object2 = Object.getPrototypeOf(object);
// console.log(Object.getPrototypeOf(object2));
// var object3 = Object.getPrototypeOf(object2);
// console.log(Object.getPrototypeOf(object3));

do {
    object = Object.getPrototypeOf(object);
    console.log(object);
} while (object);


// Finish prototypes from Mozilla page !!!
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
// next header --> Shadowing properties


// Page 157 --> finish at the begining of the page;