//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////
var a = [3,6,3,8,'test'];
console.log(a.push(8));
console.log(a);
console.log(a.pop());
console.log(a);
a[a.length] = 8;
console.log(a);
a.length--;
console.log(a);
var b = a.sort();
console.log(a);
console.log(b);
console.log(a.join(' and '));
console.log(a);
b = a.slice(1,4);
console.log(a);
console.log(b);
a.splice(1,3, 'jey', 102, 'hoho');
console.log(a);
a.splice(1,1);
console.log(a);


// Page 122 Built-in objects - Function
