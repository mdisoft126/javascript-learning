//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////
function f(a, b, c) {return arguments};
console.log(f(4,2,8));
console.log(f.length);

function f2(a, b) {return arguments.callee};
console.log(f(3,1));

function f3() {return arguments};
console.log(f3());

function f4() {return arguments.callee};
console.log(f4());

(
    function(count) {
        if (count < 5) {
            console.log("hello " + count);
            arguments.callee(++count);
        }
    }
)(1)

// Page 127 Boolean
