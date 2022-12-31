//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//Exercise 4

// function MyString(input) {

//     // conversion to string
//     var a = '';
//     var str = a + input;

//     // insert each character to table to be able to looking for specyfic characters
//     var i;
//     var r = [];
//     for (i = 0; i < str.length; i++) {
//         r[i] = str[i];
//     }

//     // length
//     r.lengthMy = str.length;

//     // toString
//     r.toStringMy = function() {
//         return str;
//     }

//     // valueOf
//     r.valueOfMy = function() {
//         return input;
//     }

//     // chatAt
//     r.charAtMy = function(char) {
//         var a = 0;
//         if(!isNaN(a + char)) {
//             return r[char];
//         } else {
//             return r[0];
//         }
//     }

//     // concat
//     r.concatMy = function(con) {
//         return input += con;
//     }

//     // slice
//     r.sliceMy = function(s, e) {
//         // var s = s1;
//         // var e = e1;
//         if (s < 0) {
//             s = r.length + s;
//         }
//         if (e < 0) {
//             e = r.length + e;
//         }
//         var str = '';
//         for (i = s; i < e; i++) {
//             str += r[i];
//         }
//         return str;
//     }

//     // return
//     return r
// };

// var s = new MyString('hello');
// console.log(s);
// console.log(s.lengthMy);
// console.log(s[0]);
// console.log(s.toStringMy());
// console.log(s.valueOfMy());
// console.log(s.charAtMy(1));
// console.log(s.charAtMy('2'));
// console.log(s.charAtMy('e'));
// console.log(s.concatMy(' world!'));
// console.log(s.sliceMy(1,3));
// console.log(s.sliceMy(0,-1));
// console.log(s.sliceMy(-3,-1));



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

/////// access to array
// var a = [1, 2, 3, 4, 5];
// var s = -3;
// var e = -1;
// if (s < 0) {
//     s = a.length + s;
// }
// if (e < 0) {
//     e = a.length + e;
// }
// var str = '';
// for (i = s; i < e; i++) {
//     str += a[i];
// }

// console.log(str);

//////// how the slice works
// var a = '12345'
// console.log(a.slice(-3,-1));
// console.log(a.slice(-2,-1));
// console.log(a.slice(0, -2));
// console.log(a.slice(3, 4));

//////// how the split works
// var a = 'hellloella';
// a = a.split('l');
// // var i;
// // var r = '';
// // for (i = 0; i < a.length; i++) {
// //     r += a[i];
// // }
// // console.log(r);
// console.log(a);

////////// test split
// var a = 'helloello';
// var d = 'l';
// var del = [];
// var i;
// var str = '';
// var r = [];
// for (i = 0; i < a.length; i ++) {
//     if (a[i] === d) {
//         del[i] = i;
//     } 
// }

// console.log(del);
// var res = [];
// var j;
// var k = 0;
// for (j = 0; j < del.length; j++) {
//     if (del[j]!= undefined) {
//         res[k] = del[j];
//         k++;
//     }
// }
// console.log(res);

// var l;
// var ld = 0;
// var spl = [];
// for (l = 0; l < a.length; l++) {
//     if(del[ld] === a[l]) {

//     }
// }

var a = 'helloello';
var d = 'l';
var i;
var str = '';
var res = [];
for (i = 0; i < a.length; i++) {
    if (a[i] !== d) {
        str += a[i];
    } else if  (a[i] === d && i === 0) {
        res[i] = '';
    } else {
        res[]
    }
}

//// Answer:

// Page 151 exercise 4 ---> finish exercise 4, finish split
