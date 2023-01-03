//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//Exercise 6

function MyArray({input}) {

    console.log({input});

    // convert to string
    var s = '';
    var str = s + input;

    // insert each character to object
    var i;
    var r = {};
    for (i = 0; i < str.length; i++) {
        r[i] = str[i];
    }

    // toString
    r.toStringMy = function() {
        return str;
    }

    // length
    r.lengthMy = str.length;

    // return
    return r;

}

var a = new MyArray(1,2,3,"test");
console.log(a.lengthMy);
console.log(a.toStringMy());

// Page 152 exercise 6 in progress
