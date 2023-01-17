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
    breathing: 'air'
}

function Human() {};

Human.prototype = monkey;

var programmer = new Human();
programmer.eat = 'pizza';
programmer.is_good_at = 'JavaScript';

console.log(programmer.eat);
console.log(programmer.is_good_at);
console.log(programmer.breathing);
// programmer.constructor = 'hello';
console.log(typeof programmer.constructor.prototype);
console.log(programmer.__proto__);
console.log(typeof programmer.prototype);
console.log(typeof programmer.__proto__);
console.log('\n');
monkey.test = 'hello elo';
console.log(programmer.test);


// Page 165 --> next Rozszerzanie obiektów wbudowanych;