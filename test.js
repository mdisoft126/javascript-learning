//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////
function f(a) {return a};
console.log(f.constructor);

function f2(a, b, c) {return a + b + c};
console.log(f2.length);

function a() {return a.caller};
function b() {return a()}
console.log(b());

var obj = {
    name: 'max',
    say: function() {
        return "I am " + this.name;
    }
}
console.log(obj.say());

function F() {};
console.log(typeof F.prototype);

F.prototype = obj;

var tst = new F();
console.log(tst.name);
console.log(tst.say());

// Page 122 Built-in objects - Function
