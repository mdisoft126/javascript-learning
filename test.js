//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//Exercise 5

function MyString(input) {

    // conversion to string
    var a = '';
    var str = a + input;

    // insert each character to table to be able to looking for specyfic characters
    var i;
    var r = [];
    for (i = 0; i < str.length; i++) {
        r[i] = str[i];
    }

    // length
    r.lengthMy = str.length;

    // toString
    r.toStringMy = function() {
        return str;
    }

    // valueOf
    r.valueOfMy = function() {
        return input;
    }

    // chatAt
    r.charAtMy = function(char) {
        var a = 0;
        if(!isNaN(a + char)) {
            return r[char];
        } else {
            return r[0];
        }
    }

    // concat
    r.concatMy = function(con) {
        return input += con;
    }

    // slice
    r.sliceMy = function(s, e) {
        // var s = s1;
        // var e = e1;
        if (s < 0) {
            s = r.length + s;
        }
        if (e < 0) {
            e = r.length + e;
        }
        var str = '';
        for (i = s; i < e; i++) {
            str += r[i];
        }
        return str;
    }

    // split
    r.splitMy = function(d) {

        var i;
        var j = 0;
        var str = '';
        var res = [];
        for (i = 0; i < r.length; i++) {
            if (r[i] !== d && i === r.length -1) {
                str += r[i];
                res[j] = str;
            } else if (r[i] === d) {
                res[j] = str;
                str = '';
                j++;
            } else if (r[i] !== d) {
                str += r[i];
            }
        }
        return res;
    }

    // reverse
    r.reverseMy = function() {
        return r.reverse();
    }

    // return
    return r
};

var s = new MyString('hello');
console.log(s);
console.log(s.lengthMy);
console.log(s[0]);
console.log(s.toStringMy());
console.log(s.valueOfMy());
console.log(s.charAtMy(1));
console.log(s.charAtMy('2'));
console.log(s.charAtMy('e'));
console.log(s.concatMy(' world!'));
console.log(s.sliceMy(1,3));
console.log(s.sliceMy(0,-1));
console.log(s.sliceMy(-3,-1));
console.log(s.splitMy('e'));
console.log(s.splitMy('l'));
console.log(s.reverseMy());


// Page 152 exercise 6
