//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line
// shift + ctrl + k --> remove line

function f() {
    function c(x) {
        return function() {
            return x;
        }
    }
    var a = [];
    var i;
    for(i = 0; i < 3; i++) {
        a[i] = c(i);
    }
    return a;
}

var n = f();
console.log(n[0]());
console.log(n[1]());
console.log(n[2]());

// Page 98 --> Access functions
