//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//Exercise 6

function MyArray(...args) {

    console.log(arguments);
    var arg = arguments;

    // conversion to string
    var str = "";
    for (var a in arg) {
        if (a < arg.length -1) {
            str += arg[a] + ',';
        } else {
            str += arg[a];
        }
    }

    // toString
    arg.toStringMy = function() {
        return str;
    }

    // length
    arg.lengthMy = arg.length;

    var r = {};

    // push
    arg.pushMy = function(...args) {
        var p = arguments;
        var i = arg.length;
        var j = 0;
        for (i; i < arg.length + p.length; i++) {
            arg[i] = p[j];
            j++
        }
        return arg;
    }


    // return
    return arg;
}

var a = new MyArray(1,2,3,"test");
console.log(a.toStringMy());
console.log(a.lengthMy);
console.log(a[a.length -1]);
console.log(a.pushMy('hey', 99));
console.log(a.toStringMy());

// Page 152 exercise 6 in progress --> find out how to overwrite global object from function.