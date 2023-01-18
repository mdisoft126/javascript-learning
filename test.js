//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 5 Prototypes

//// check if the the field or method which you want to add to the build-in method, doesn't already exists.

if (!String.prototype.reverse) {
    String.prototype.reverse = function() {
        return Array.prototype.reverse.apply(this.split('')).join('');
    }
}

var s = 'abc';
console.log(s.reverse());

// Page 167 --> prototype pitfalls;