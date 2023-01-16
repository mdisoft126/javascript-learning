//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 5 Prototypes

var t = [1, 2, 3];

for (var i in t) {
    console.log(t[i]);
}

var o = {
    p1: 1,
    p2: 2,
    p3: 3
};

for (var j in o) {
    console.log(j + " = " + o[j]);
}


// Page 159 --> next "Nadpisywanie pól prototypu własnymi polami obiektu";