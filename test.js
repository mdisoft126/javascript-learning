//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix E: Answers to Exercise Questions
////// Chapter 4, Objects
//// 1

//
function F() {
    "use strict";
    this.name = "I am F()";
    function C() {
        return this;
    }
    return C();
}

var o = new F();
// console.log(o.constructor.name);
console.log(o.name);
console.log(o.this);

// function F2() {
//     function C2() {
//         return this;
//     }
//     return new C2();
// }

// var o2 = new F2();
// console.log(o2.constructor.name);
// console.log(o2.this);

// function F3() {
//     "use strict";
//     function C3() {
//         return this;
//     }
//     return C3();
// }

// var o3 = new F3();
// console.log(o3.constructor.name);

// Next Appendix E: Answers to Exercise Questions //

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip