//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//Exercise 6

// function MyMath() {

//     // random
//     this.randMy = function(min, max, incl) {

//         var r = [];
//         var i;
//         var l = max - min;
        
//         for (i = 0; i < l; i++) {
//             r[i] = min;
//             min++;
//         }

//         return r;
//     }

// }

// var a = new MyMath();
// console.log(a.randMy(1,9));

const date = new Date();
var rand = date.getTime() + '';
console.log(rand.slice(-2));
// console.log(date.getTime()/date.getTime().length);


// Page 152 exercise 7 in progress. Try to change git e-mail address. check git