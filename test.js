//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////
var a = new Date();
console.log(a);
console.log(a.getMonth());
console.log(a.setMonth(2));
// a.setMonth(2);
console.log(a);
console.log(a.toString());
console.log(a.getMonth());

var b = Date.parse('Jan 1, 2020');
console.log(b);
console.log(new Date(b));
console.log((new Date(b)).toString());
var c = new Date(b);
console.log(c.toString());

var d = new Date(2022, 11, 22, 23, 29);
console.log(d);
// console.log(d.toString());
// console.log((new Date(Date.UTC(2022, 11, 22, 23, 29))).toString());
console.log(new Date(Date.UTC(2022, 11, 22, 23, 29)));


var birt = new Date(2023, 3, 3, 12);
console.log(birt);
console.log(birt.getDay());
console.log(birt.toDateString());

// Page 140 Finish loop
