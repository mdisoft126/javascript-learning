//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 9 Promises and proxies

////// javascript call stack
function c(z2) {
    console.log("c: finished");
    console.log(new Error().stack);
}
function b(z1) {
    console.log("b: " + z1 + 1);
    c(z1 + 1);
}
function a(z) {
    console.log("a: " + z + 1);
    b(z + 1);
}

a(1);


// Next Chaper 10 - The browser environment, page 294