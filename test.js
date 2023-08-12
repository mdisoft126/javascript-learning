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

// {n}
console.log("regular expression".match(/s/g));
console.log("regular expression".match(/s{2}/g));
console.log("regular expression".match(/s{3}/g));
console.log("regular expression".match(/\w{3}/g));
console.log("regular expression".match(/\b\w{3}/g));
console.log("regular expression".match(/\b\w{4}/g));
console.log("regular expression".match(/\b\w{8}/g));

// {min,max}
console.log("doooooooooooodle".match(/o/g));
console.log("doooooooooodle".match(/o/g).length);
console.log("doooooooooodle".match(/o{2}/g));
console.log("doooooooooodle".match(/o{2,}/g));
console.log("doooooooooodle".match(/o{2,6}/g));

// (pattern)
console.log("regular expression".replace(/(s)/g, '$1$1'));
console.log("regular expression".replace(/(r)/g, ''));
console.log("regular expression".replace(/(r)(e)/g, '$2$1'));
console.log("regular expression".replace(/(r)/g, '$1$1$1'));
console.log("regular expression".replace(/(r)(e)/g, '$1$1$1$2$2$2'));
console.log("regular expression".replace(/(r)(e)/g, '$2$1$1$2'));

// (?:pattern)
console.log("regular expression".replace(/(?:r)/g, ''));
console.log("regular expression".replace(/(?:r)(e)/g, '$1$1$1'));

// Next Appendix E: Answers to Exercise Questions // page 477

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip