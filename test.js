//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//Exercise 4

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


/////// example of constructor
// function Dog(name) {
//     this.name = name;
//     this.bark = function() {
//         return "hau hau";
//     }
// }

// var d = new Dog('max');
// console.log(d.name);
// console.log(d.bark());

/////// implicit conversion
// var a = '';
// var b = 123;
// var c = a + b;
// console.log(typeof c);

//// Answer:

// Page 151 exercise 4 ---> finish exercise 4, next slice
