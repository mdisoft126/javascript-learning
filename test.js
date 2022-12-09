//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line
// shift + ctrl + k --> remove line

function f(x) {
  var i = 0;
  return function () {
    return x[i++];
  };
}

var next = f([8, 3, 5]);
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());

// Page 100 --> Exercises
