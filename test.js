//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 5 Prototypes

Array.prototype.inArray = function(needle) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === needle) {
            return true;
        }
    }
    return false;
}

var t = ["reb", "black", "white"];

console.log(t.inArray("yellow"));
console.log(t.inArray("black"));

//////

String.prototype.reverse = function() {
    return Array.prototype.reverse.apply(this.split('')).join('');
}

var s = 'abc';
console.log(s.reverse());

// Page 166 --> extending buid-in objects - controversies;