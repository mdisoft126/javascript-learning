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

    var b;

    // toString
    arg.toStringMy = function() {
        function f() {
            var str = "";
            for (var a in arg) {
                if (a < arg.length -1) {
                    str += arg[a] + ',';
                } else {
                    str += arg[a];
                }
            }
            return arg.str;
        }
        f();
    }

    // // length
    // this.lengthMy = arg.length;



    // return
    return arg;
}

var a = new MyArray(1,2,3,"test");
console.log(a.toStringMy());
// console.log(a.lengthMy);
// console.log(a);
console.log(a[a.length -1]);

// Page 152 exercise 6 in progress --> when it is this.toString it works but the a[a.length -1] doesn't works. 
// When there is return arg then a[a.length -1] works but toString dosnt works (it returns whole function) --> fix toString
