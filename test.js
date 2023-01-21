//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 6 Inheritance

//// using this
function Figure(){
    this.name = 'figure';
}

var a = new Figure;
console.log(a.name);

delete Figure;
console.log(a.name);
console.log('\n');

//// using prototype
function Figure2() {
    Figure2.prototype.name = 'figure';
}

var b = new Figure2;
console.log(b.name);

console.log(delete Figure2());
console.log(b.name);



// Page 175