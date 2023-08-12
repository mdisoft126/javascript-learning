//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix E: Answers to Exercise Questions
////// Chapter 3, Functions
//// 3

//
// var a = 1;
// function f() {
//     function n() {
//         console.log(a);
//     }
//     a = 2;
//     n();
// }

// f();

//
// var a = 1;
// function f() {
//     function n() {
//         console.log(a);
//     }
//     n();
//     a = 2;
//     n();
// }

// f();

//
var a = 1;
function f() {
    var a;
    function n() {
        console.log(a);
    }
    n();
    a = 2;
    n();
}

f();


// Next Appendix E: Answers to Exercise Questions //

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip