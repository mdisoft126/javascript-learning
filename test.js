//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// function factory(name) {
//   return {name:name};
// }

// var f = factory('herbapol');
// console.log(f.name);
// console.log(f.constructor);
// console.log(f instanceof Object);

function C() {this.a = 1};
var c = new C();
console.log(c.a);

function C2() {this.a = 1; return 2};
var c2 = new C2();
console.log(c2.a);
console.log(c2.b);

function C3() {this.a = 1; return {b: 2}};
var c3 = new C3();
console.log(c3.a);
console.log(c3.b);

// Page 110
