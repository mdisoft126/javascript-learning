//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line
// shift + ctrl + k --> remove line

////
var f = console.log
f("hello");
////
// 4.1
var f = console.log
eval('f("hello2")');
// 4.2
var e;
var f = console.log;
eval('e=f')("hello3");
// 4.3
(
  function() {
    return console.log;
  }
)()("hello4");


// Page 101 --> Exercises nr 2
