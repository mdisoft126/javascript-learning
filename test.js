//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////
var a = new String("Master of disaster");
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.charAt(0));
console.log(a[0]);
console.log(a.charAt(55));
console.log(a[55]);
console.log(a.indexOf('s'));
console.log(a.indexOf('S'));
console.log(a.indexOf('s', 3));
console.log(a.lastIndexOf('s'));
console.log(a.indexOf('of'));
console.log(a.toLocaleLowerCase().indexOf('master'));

if (a.indexOf('Master')) {
    console.log('yes');
} else {console.log('no');}

if (a.indexOf('Master') !== -1) {
    console.log('yes');
} else {console.log('no');}

// Page 133 (end of the page) Methods slice and substring
