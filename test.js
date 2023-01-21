//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 5 Prototypes - Exercise 6

function potasuj() {
    // var a = arguments;
    var a = [1,2,3,4,5,6,7,8,9];
    var t2 = [];
    for (var i = 0; i < a.length; i++) {
        t2[i] = a[Math.random * a.length];
    }
    return t2;
}

console.log(potasuj());

// var t = [1,2,3,4,5,6,7,8,9];



// Page 170 --> finish exercise 6;