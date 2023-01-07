//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//Exercise 6

function MyArray() {

    var arg = {};
    var i;
    var argL = 0;
    for (i = 0; i < arguments.length; i++) {
        arg[i] = arguments[i];
    }

    var argL = Object.keys(arg).length;

    // toString
    arg.toStringMy = function() {
        var str = "";
        var is;
        for (is = 0; is < argL; is++) {
            if (is < argL -1) {
                str += arg[is] + ',';
            } else {
                str += arg[is];
            }
        }
        return str;
    }

    // length
    arg.lengthMy = Object.keys(arg).length;

    // good example 
    // https://stackoverflow.com/questions/11957191/var-variables-this-variables-and-global-variables-inside-a-javascript-c

    // push
    arg.pushMy = function() {
        var p = arguments;
        var i = argL;
        var aL = argL;
        var j = 0;
        for (i; i < argL + p.length; i++) {
            arg[i] = p[j];
            j++;
        }
        argL += p.length;
        return argL;
    }


    // return
    return arg;
}

var a = new MyArray(1,2,3,"test");
console.log(a);
console.log(a.toStringMy());
console.log(a.lengthMy);
console.log(a[a.lengthMy -1]);
console.log(a.pushMy('hey', 99));
console.log(a.toStringMy());
console.log(a);
console.log(a.lengthMy);

// Page 152 exercise 6 in progress --> finish but first repair lenght because after push method is still shows 4 instead of 6.