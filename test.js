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

var a = new Gadget("Henry", "Yellow");
console.log(a.whoAreYou());


// Page 152 exercise 7 in progress --> add functionality for included max