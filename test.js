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

    // toString
    this.toStringMy = function() {
        var str = "";
        for (var a in arg) {
            if (a < arg.length -1) {
                str += arg[a] + ',';
            } else {
                str += arg[a];
            }
        }
        return str;
    }

    // length
    this.lengthMy = arg.length;

    

}

var a = new MyArray(1,2,3,"test");
console.log(a.toStringMy());
console.log(a.lengthMy);

// Page 152 exercise 6 in progress
