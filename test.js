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

// a(?=b)
console.log("Some Text".match(/Some(?=Tex)/g));
console.log("Some Text".match(/Some(?=\s*Tex)/g));

// a(?!)
console.log("Some Text".match(/Some(?!Text)/g));
console.log("Some Text".match(/Some(?!\s*Text)/g));

// \
console.log("R2-D2".match(/[2-3]/g));
console.log("R2-D2".match(/[2\-3]/g));

// \n
console.log("Hello \nWorld");

// \r
console.log("Hello \rWorld");

// \f
console.log("Hello \fWorld");

// \t
console.log("Hello \tWorld");

// \v
console.log("Hello \vWorld");

// \s
console.log("R2\n -D2".match(/\s/g));

// \S
console.log("R2\n -D2".match(/\S/g));

// [ ]
console.log("Hello World".match(/[ ]/g));


// Next Appendix D: Regular Expressions - // \w page 473

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript