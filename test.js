//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

//// Summary

////// 2. Inheriting the prototype itself
function Parent() {
    this.name = 'parent';
    this.toString = function() {return this.name};
}
Parent.prototype.size = 4;

function Child() {
    this.name = 'child';
}

Child.prototype = Parent.prototype;

var a = new Child();

console.log(a.name);
console.log(a.toString());
console.log(a.size);
console.log('\n');

Child.prototype.size = 10; ////// using this method we can overwrite the parent's value

var b = new Parent();
console.log(b.size);

//////


// Page 200 next --> Case study: we draw shapes - analysis