//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////
var a = [];
a[0] = 55;
a[1] = 66;
console.log(a[0]);

var b = [5, 6, 1, 'abc'];
console.log(b);

var c = new Array(7, 2, 'ggg');
console.log(c);

var d = [5];
console.log(d);

var e = new Array(5);
console.log(e);

console.log(typeof a);

console.log(b.toString());

console.log(c.valueOf());

console.log(a.constructor);

var o = {name: "max", species: "dog"};
console.log(o.length);
console.log(c.length);

var f = [];
var p = {};
console.log(f[0] = 1);
console.log(p[0] = 1);
console.log(f.prop = 2);
console.log(p.prop = 2);
console.log(f);
console.log(p);
console.log(f.length);
f[2] = 'a';
f[3] = 'b';
console.log(f);
console.log(f.length);
f.length = 7;
console.log(f);


// Page 117 Built-in objects
