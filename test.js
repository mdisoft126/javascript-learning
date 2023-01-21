//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 5 Prototypes - Exercise 6

function shuffle() {
    // arguments
    var a = [];
    for (var j in arguments) {
        a[j] = arguments[j];
    }

    // shuffle
    var b = a.length;
    var t = [];
    for (var i = 0; i < b; i++) {
        t[i] = a.splice(Math.floor(Math.random() * a.length),1)[0];
    }
    console.log(t);
}

shuffle(1,2,3,4,5,6,7,8,9);

// Page 170 --> finish exercise 6;