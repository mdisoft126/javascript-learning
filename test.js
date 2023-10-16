//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix E: Answers to Exercise Questions
////// Chapter 7, The browser environment
//// 1. The title clock program

// setInterval(function () {
//     document.title = new Date().toTimeString();
//     // document.title = "hello";
// },1000);

// //// 2. Animate of resizing 200x200 pop up to 400x400
// // https://www.wp.pl/

// var w = window.open('https://www.wp.pl/',undefined, 'width = 200, height = 200');

// window.addEventListener('message', function(event) {
//     if (event.origin === 'http://127.0.0.1:5500') { 
//         var i = setInterval((function() {
//             var size = 200;
//             return function() {
//                 size += 5;
//                 w.resizeTo(size, size);
//                 if (size === 600) {
//                     clearInterval(i);
//                 }
//                 console.log(size);
//             }
//         }()),100);
//     }
// });

// var w = window.open('https://www.wp.pl/',undefined, 'width = 200, height = 200');

// var i = setInterval((function() {
//     var size = 200;
//     return function() {
//         size += 5;
//         w.resizeTo(size, size);
//         if (size === 600) {
//             clearInterval(i);
//         }
//         console.log(size);
//     }
// }()),100);



// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip

console.log("hello");
