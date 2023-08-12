//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix E: Answers to Exercise Questions
////// Chapter 2, Primitive Data Types, Arrays, Loops, and Conditions
//// 3

// multiplication table
for (i = 1; i < 11; i++) {
    for (j = 1; j < 11; j++) {
        console.log(i + " * " + j + " = " + i*j);
    }
}

// multiplication table 2nd version
console.log("2nd version");
var k = 1, l = 1;
while (k < 11) {
    while (l < 11) {
        console.log(k + " * " + l + " = " + k*l);
        l++;
    }
    k++;
    l = 1;
}

// Next Appendix E: Answers to Exercise Questions //

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip