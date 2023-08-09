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

// \w
console.log("S0m_t text!".match(/\w/g));

// \W
console.log("S0m_t text!".match(/\W/g));

// \d
console.log("R2-D2 and T34".match(/\d/g));

// \D
console.log("R2-D2 and T34".match(/\D/g));

// \b
console.log("R2D2 and C-3PO".match(/[RD]2/g));
console.log("R2D2 and C-3PO".match(/[RD]2\b/g));
console.log("R2-D2 and C-3PO".match(/[RD]2\b/g));
console.log("R2_D2 and C-3PO".match(/[RD]2\b/g));
console.log("R2 D2 and C-3PO".match(/[RD]2\b/g));
console.log("R2.D2 and C-3PO".match(/[RD]2\b/g));

console.log("-----------");

// \B
console.log("R2D2 and C-3PO".match(/[RD]2/g));
console.log("R2D2 and C-3PO".match(/[RD]2\B/g));
console.log("R2-D2 and C-3PO".match(/[RD]2\B/g));
console.log("R2_D2 and C-3PO".match(/[RD]2\B/g));
console.log("R2 D2 and C-3PO".match(/[RD]2\B/g));
console.log("R2.D2 and C-3PO".match(/[RD]2\B/g));

// [\b]
console.log("Hello\bWorld".match(/[\b]/g));

// \0
console.log("Hello\0World".match(/\0/g));
// console.log("Hey\x00Men");

// \u0000
console.log("\u0441\u0442\u043E");
console.log("сто".match(/\u0441/g));

// x00
console.log("\x64");
console.log("dude".match(/\x64/g));


// Next Appendix D: Regular Expressions // ^ page 475

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript