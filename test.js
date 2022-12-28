//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//Exercise 2

function C() {
    this.a = 1;
    // return false;

}

function D() {
    this.a = 1;
    return {b: 2};
}

var c = new C();
var d = new D();

console.log(typeof new C());
console.log(c);
console.log(typeof new D());
console.log(d);

//// Answer: the result will be type =  object

// Page 151 exercise 3
