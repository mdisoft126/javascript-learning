//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line
// shift + ctrl + k --> remove line

function f1() {
    var a = 1;
    console.log(a);
    f2();
}

function f2() {
    return console.log(a);
}

var a = 5;
f1();

// Page 93 --> Functions range