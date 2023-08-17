//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix E: Answers to Exercise Questions
////// Chapter 4, Objects
//// 2

//
function C() {
    this.a = 1;
    return false;
}

// var o = new C();
// console.log(o.a);
// console.log(o.this);
console.log(new C());
console.log(new C().a);
console.log(C());
var b = new C();
console.log(b);

// Next Appendix E: Answers to Exercise Questions //

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip