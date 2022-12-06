//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line
// shift + ctrl + k --> remove line

function addOne (a) {
    return a + 1;
}

function multiplyByTwo (a, b, c, f) {
    var i, res = [];
    for (i = 0; i < 3; i++) {
        res[i] = f(arguments[i] * 2);
    }
    return console.log(res);
}

multiplyByTwo(1,2,3, addOne);
multiplyByTwo(1,2,3, function(a){return a + 2});


// Page 87 --> Functions