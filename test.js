//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 5 Prototypes

var monkey = {
    eat: 'bananas',
    hairy: true
}

function Human(name) {
    this.name = name;
}

Human.prototype = monkey;

var a = new Human("John");
console.log(a.name);
console.log(a.eat);
console.log(a.hairy);
console.log('\n');

console.log(monkey.isPrototypeOf(a));


// Page 162 --> next "isPrototypeOf()";