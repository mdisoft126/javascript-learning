//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix D: Regular Expressions
//////
////

// ^
console.log("regular\nregular\nexpression".match(/r/g));
console.log("regular\nregular\nexpression".match(/^r/g));
console.log("regular\nregular\nexpression".match(/^r/mg));

// $
console.log("regular\nregular\nexpression".match(/r$/g));
console.log("regular\nregular\nexpression".match(/r$/mg));

// .
console.log("expression".match(/s./g));
console.log("regular".match(/r./g));
console.log("regular".match(/r.../g));

// *
console.log("expression".match(/s.*/g));
console.log("expression".match(/e.*/g));
console.log("export sessionp".match(/e.*p/g));
console.log("".match(/.*/));
console.log("anything".match(/.*/));

// ?
console.log("anything".match(/ny?/g));
console.log("yaynthying".match(/yn?/g));
console.log("color".match(/colou?r/));
console.log("colour".match(/colou?r/));
console.log("copour".match(/colou?r/));
console.log("copour".match(/colou?r/));
console.log("colour".match(/colou?s/));

// +
console.log("anything".match(/ny+/g));
console.log("R2-D2 and C-3PO".match(/[a-z]/gi));
console.log("R2-D2 and C-3PO".match(/[a-z]+/gi));


// Next Appendix D: Regular Expressions // {n} page 476

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript