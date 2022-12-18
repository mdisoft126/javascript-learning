//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////
function sum(a, b, c) {return a + b + c};
console.log(sum.toString());

console.log(eval.toString());

var obj = {
    name: 'max',
    say: function(who) {return "Hello " + who + " I am " + this.name}
}
console.log(obj.say("Martin"));

var my_obj = {
    name: 'Leonidas papanidas'
}

console.log(obj.say.call(my_obj, 'Michael'));
console.log(obj.say.call('Michael'));

console.log(obj.say.apply(my_obj, ['Miguel']));

// Page 122 Built-in objects - Function
