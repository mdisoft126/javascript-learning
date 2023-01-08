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
    var count = 0;
    var argL = 0;
    for (i = 0; i < arguments.length; i++) {
        arg[i] = arguments[i];
        count++;
    }

    // argL = count;

    // console.log(argL);

    // toString
    arg.toStringMy = function() {
        var str = "";
        var is;
        for (is = 0; is < count; is++) {
            if (is < count -1) {
                str += arg[is] + ',';
            } else {
                str += arg[is];
            }
        }
        return str;
    }

    // length
    arg.lengthMy = count;

    // push
    arg.pushMy = function() {
        var p = arguments;
        var i = count;
        var j = 0;
        for (i; i < arg.lengthMy + p.length; i++) {
            arg[i] = p[j];
            j++;
            count++;
        }
        arg.lengthMy = count;
        return count;
    }

    // pop
    arg.pop = function() {
        delete arg[count];
        count--;
        arg.lengthMy = count;
        return "[" + arg.toStringMy() + "]";
    }

    // join



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
console.log(a.pop());
console.log(a.lengthMy);
console.log(a.pop());
console.log(a.toStringMy());
console.log(a.lengthMy);

// Page 152 exercise 6 in progress --> finish but first repair lenght because after push method is still shows 4 instead of 6.