//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line
// shift + ctrl + k --> remove line

////

function getRGB(input) {
  var a = '0x';
  var p = /([a-f]|[A-F]|[0-9])/g;
  var result = input.match(p);
  var r = parseInt(a.concat(result.slice(0,2).join("")));
  var g = parseInt(a.concat(result.slice(2,4).join("")));
  var b = parseInt(a.concat(result.slice(4,6).join("")));
  console.log("rgb(" + r + ", " + g + ", " + b + ")");
}

getRGB("#00FF00");


// Page 101 --> Exercises nr 2
