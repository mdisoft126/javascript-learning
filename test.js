//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////
var a = new String("HelloJavaScriptWorld");
console.log(a);
var r = /[A-Z]/g;
console.log(a.replace(r, ''));
console.log(a.replace(r, '_$&'));
console.log(a.replace(r, '$&_'));
var r2 = /([A-Z])(a)/g;
console.log(a.replace(r2, '_$1-$2'));
var r3 = /([A-Z])([a-z])/g;
console.log(a.replace(r3, '_$1-$2'));

var email = "mdi126@wp.pl";
console.log(email);
var user = email.replace(/(.*)@.*/, '$1');
console.log(user);


// Page 143 finish .exec()
